function showComparison() {
  const output = document.getElementById("output");

  output.innerHTML = `
    <h2>S3 Static Website</h2>
    <p><b>When to use:</b> Portfolios, static pages</p>
    <p><b>When NOT to use:</b> Login-based or database apps</p>
    <p><b>Trade-offs:</b> Low cost, no backend</p>
    <p><b>Common mistake:</b> Expecting backend features</p>

    <h2>EC2 Monolithic Application</h2>
    <p><b>When to use:</b> Backend apps with full control</p>
    <p><b>When NOT to use:</b> Short hackathons</p>
    <p><b>Trade-offs:</b> Flexible but needs maintenance</p>
    <p><b>Common mistake:</b> Overengineering small projects</p>

    <h2>Serverless (Lambda-based)</h2>
    <p><b>When to use:</b> API-based hackathon demos</p>
    <p><b>When NOT to use:</b> Long-running tasks</p>
    <p><b>Trade-offs:</b> Auto-scaling, harder debugging</p>
    <p><b>Common mistake:</b> Ignoring execution limits</p>
  `;
}

