import React from "react";
import { act, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { GraphQLError } from "graphql";
import { GET_PAST_LAUNCH } from "../../services/graphql/queries/pastLaunch";
import { MockedProvider } from '@apollo/client/testing';
import { Launch } from "../../utilities/utils-types";
import Mission from "./misson";

describe("Mission view tests", () => {
    test(`Mission component render with loader`, () => {
        const { container } = render(
        <MockedProvider mocks={[]}>
            <Mission/>
        </MockedProvider>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    test(`Mission component render with success`, async () => {
        const launch: Launch = {
            id: "0",
            mission_name: "This is a mission name",
            details: "This is a mission detail",
            links: {
                article_link: null,
                flickr_images: [],
                video_link: null
            },
            ships: []
        };

        const mocks = [{
            request: {
                query: GET_PAST_LAUNCH
            },
            result: {
                data: { launch: launch}
            },
        }];

        const { container } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Router>
                <Mission/>
            </Router>
        </MockedProvider>
        );

        await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
        expect(container.firstChild).toMatchSnapshot()
    });

    test(`Mission component render with error msg`, async () => {
        const mocks = [{
            request: {
                query: GET_PAST_LAUNCH,
                variables: { launchID: '108' },
            },
            result: {
                errors: [new GraphQLError('Error!')]
            },
        }];

        const { container } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Mission/>
        </MockedProvider>
        );
    
    
        await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
        expect(container.firstChild).toMatchSnapshot();
    });
});
