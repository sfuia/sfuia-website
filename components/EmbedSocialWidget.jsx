import { useEffect } from "react";

// Source: https://help.embedsocial.com/en/articles/4797000-how-to-embed-code-in-a-react-application
export const EmbedSocialWidget = () => {
  useEffect(() => {
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialHashtagScript");
  }, []);

  return (
    <div
      className="embedsocial-hashtag"
      data-ref="fa400b108e0a1ad9d0e4ceb5d1a7e026d5067ca3"
    >
      <a
        className="feed-powered-by-es feed-powered-by-es-feed-new"
        href="https://embedsocial.com/social-media-aggregator/"
        target="_blank"
        rel="noreferrer"
        title="Widget by EmbedSocial"
      >
        SFU SSSS Instagram Feed
      </a>
    </div>
  );
};
