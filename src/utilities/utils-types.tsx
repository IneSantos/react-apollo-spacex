
export interface Launches {
    id: string,
    mission_name: string,
    launch_date_local: string,
    details: string | null
}

interface Ship {
    id: string,
    image: string
}

export interface Launch {
    id: string,
    mission_name: string,
    details: string,
    links: {
        article_link: string | null,
        flickr_images: string[],
        video_link: string | null
    },
    ships: Ship[]
}