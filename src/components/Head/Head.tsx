import NextHead from "next/head";

export default async function Head() {
    return (
        <NextHead>
            <title>Trello Clone</title>
            <meta name="description" content="Trello Clone App" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </NextHead>
    );
}
