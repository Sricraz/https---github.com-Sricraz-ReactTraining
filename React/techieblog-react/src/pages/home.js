import React from "react";

function Home() {
  return (
    <div class="card2">
      <div class="card">
        <img
          src="/images/tech3.jpg"
          alt="logo"
          style={{ height: "100%", width: "100%" }}
        />
        <div class="container2">
          <h4>
            <b>Techie Blog</b>
          </h4>
          <p>
            Platform engineering is a hot topic in modern software development
            and delivery, with some claiming it is the replacement for DevOps,
            or even declaring"DevOps is dead." But amidst the hype, it’s
            important to understand platform engineering 
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="/images/Tech.jpg"
          alt="logo"
          style={{ height: "100%", width: "100%" }}
        />
        <div class="container">
          <h4>
            <b>ChatGPT Blog</b>
          </h4>
          <p>
            Chatbots like ChatGPT (Generative Pre-trained Transformer) can
            significantly help with creating your blog. Using machine learning
            and natural language processing, this powerful tool can turn short
            user input into a fully-written blog post.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="/images/Tech1.jpg"
          alt="logo"
          style={{ height: "100%", width: "100%" }}
        />
        <div class="container2">
          <h4>
            <b>Docker Blog</b>
          </h4>
          <p>
            The Docker certification path is designed to cater to individuals at
            different levels of experience and expertise. Whether you are a
            beginner or an advanced user, there is a suitable certification for
            you. 
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="/images/blog.jpg"
          alt="logo"
          style={{ height: "100%", width: "100%" }}
        />
        <div class="container">
          <h4>
            <b>Kubernetes Blog</b>
          </h4>
          <p>
            Kubernetes commands, mostly accessed through the `kubectl`
            command-line interface, are important for operating Kubernetes
            clusters. Here’s a list of some basic `kubectl` commands categorized
            by their use cases:
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
