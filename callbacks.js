 const cities = [
        {
          name: "Siaya",
          region: "Western",
        },
        {
          name: "Nairobi",
          region: "Central",
        },
        {
          name: "Mombasa",
          region: "Coastal",
        },
      ];

      function getCities() {
        setTimeout(() => {
          let output = "";
          cities.forEach((city, index) => {
            output += `<li key=${index}>${city.name} is located in ${city.region} Kenya </li>`;
          });

          let body = document.querySelector("#main");
          body.innerHTML = output;
        }, 1000);
      }

      function createCity(city, callback) {
        setTimeout(() => {
          cities.push(city);
          callback();
        }, 2000);
      }

      createCity({ name: "Nakuru", region: "Central" }, getCities);