var ugcPostUrl = "https://api.linkedin.com/v2/ugcPosts";
    var registerImageUrl =
      "https://api.linkedin.com/v2/assets?action=registerUpload";
    var accessToken =
      "AQUd_I04hAqSykgFoJ9Y90-9RtdQ0U8Y6UnzLHNNioqF3LV_mT3FotggoQjmjNrY-M3_DvVtxRAiOSYRc967q0RVk-8jN35yvrNDvVkjV_xkrfprJwpiOhBkY4zYJjx7_FBZ5HGOiL6wFn-AEpdtvnAhmx7Nd-KdEziN5SWDuHdUW73rwDzu5C61d0q2xySKSLT8Kf-aY1QZYQVN8CRNxCBR2fBA8BA5AdASgmh6pAEE5P5yYPP1GuwO2pmleWijcml5cKsfgpkH5HPU19AzgLOVxnj9NHH7cqm0qj9XlqMk5OBdsuhqZWiAWH09qooU9h9RF6AuqYAyT9lUzuECuINfmqEY2Q";
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer AQUd_I04hAqSykgFoJ9Y90-9RtdQ0U8Y6UnzLHNNioqF3LV_mT3FotggoQjmjNrY-M3_DvVtxRAiOSYRc967q0RVk-8jN35yvrNDvVkjV_xkrfprJwpiOhBkY4zYJjx7_FBZ5HGOiL6wFn-AEpdtvnAhmx7Nd-KdEziN5SWDuHdUW73rwDzu5C61d0q2xySKSLT8Kf-aY1QZYQVN8CRNxCBR2fBA8BA5AdASgmh6pAEE5P5yYPP1GuwO2pmleWijcml5cKsfgpkH5HPU19AzgLOVxnj9NHH7cqm0qj9XlqMk5OBdsuhqZWiAWH09qooU9h9RF6AuqYAyT9lUzuECuINfmqEY2Q"
      },
      body: JSON.stringify({
        registerUploadRequest: {
          owner: "urn:li:person:rfMZBdLqzf",
          recipes: ["urn:li:digitalmediaRecipe:feedshare-image"],
          serviceRelationships: [
            {
              identifier: :li:userGeneratedContent",
              relationshipType: "OWNER"
            }
          ],
          supportedUploadMechanism: ["SYNCHRONOUS_UPLOAD"]
        }
      })
    };
    fetch(registerImageUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));