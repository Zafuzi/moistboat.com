export default function()
{
    return (
        <section className="container-1100 container-centered">
            <h2>About</h2>
            <p>SleeplessInc Discord: <a href="https://discord.gg/ywMm7d9w3Z">https://discord.gg/ywMm7d9w3Z</a></p>

            <p>What is this?</p>
            <ul>
                <li>A simple opinionated template for building quick and dirty web apps using node and express</li>
                <li>A stupidly named repo</li>
            </ul>

            <p>What this isn&#39;t?</p>
            <ul>
                <li>A full featured framework</li>
                <li>A production ready template</li>
                <li>A template with user authentication (yet...)</li>
                <li>A template for building a native mobile app (yet...)</li>
            </ul>

            <p>How do I use this?</p>
            <ul>
                <li>clone the repo</li>
                <li><code>npm install</code></li>
                <li><code>npm run dev</code> to run the dev server</li>
                <li><code>npm run build</code> to build the client</li>
                <li><code>npm run clean</code> to remove the dist folder</li>
                <li><code>npm run build:clean</code> to build and clean (also resets node_modules folder)</li>
            </ul>

            <p>What about production?</p>
            <ul>
                <li>Currently this template assumes that you will be passing the app to a server already running express or something like it. The idea is that an external app will require this app as a module and try to run it. That is why <code>index.js</code> exports the express app.</li>
                <li>The dev server just starts the express app on port 3000, but you can pass a port number as an argument to the dev script or extend this system however you like, you are a 
                fantastic developer after all.</li>
            </ul>
        </section>
    );
}
