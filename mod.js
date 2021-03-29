function handleRequest() {
    return new Response(
    `<body
      align="center"
      style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 1.5rem;"
    >
        <h1>Hello world!</h1>
        <div>
            My name is gitkado. <a href="https://twitter.com/gitkado">@gitkado</a><br>
            I really wanted to use JSX to write this page.
        </div>
    </body>`,
        {
            headers: {
                "content-type": "text/html; charset=UTF-8",
            },
        },
    );
}

addEventListener("fetch", (event) => {
    event.respondWith(handleRequest());
});
