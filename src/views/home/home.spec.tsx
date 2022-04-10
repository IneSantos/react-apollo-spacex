import React from "react";
import { act, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { GraphQLError } from "graphql";
import { GET_PAST_LAUNCHES } from "../../services/graphql/queries/pastLaunches";
import { MockedProvider } from '@apollo/client/testing';
import Home from "./home";
import { Launches } from "../../utilities/utils-types";

describe("Home view tests", () => {
    test(`Home component render with loader`, () => {
        const { container } = render(
        <MockedProvider mocks={[]}>
            <Home/>
        </MockedProvider>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test(`Home component render with success`, async () => {
        const launches: Launches[] = [
            {
                id: "0",
                mission_name: "This is a mission name",
                details: "This is a mission detail",
                launch_date_local: "2020-10-24T11:31:00-04:00"
            }
        ]

        const mocks = [{
            request: {
                query: GET_PAST_LAUNCHES
            },
            result: {
                data: { launchesPast: launches}
            },
        }];

        const { container } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Router>
                <Home/>
            </Router>
        </MockedProvider>
        );

        await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
        expect(container.firstChild).toMatchSnapshot()
    });

    test(`Home component render with error msg`, async () => {
        const mocks = [{
            request: {
                query: GET_PAST_LAUNCHES
            },
            result: {
                errors: [new GraphQLError('Error!')]
            },
        }];

        const { container } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Home/>
        </MockedProvider>
        );
    
        await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
        expect(container.firstChild).toMatchSnapshot();
    });
});
