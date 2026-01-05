
jQuery(function () {
  let year: string = new Date().getFullYear().toString();
  document.getElementsByTagName(
    "footer"
  )[0].innerHTML = `<p class="ml-4 pb-0">Louan Bélicaud © Copyright ${year}</p>`;

  $("#r1").on("click", function () {
    $(".staticWindow").fadeOut(10);
    $(".staticWindow").queue(function () {
      setTimeout(function () {
        $(".staticWindow").dequeue();
      }, 2000);
    });
    $(".staticWindow").fadeIn(10);
  });

  $("#burger").on("click", function (e) {
    e.stopPropagation();
    $("#burger").toggleClass("open");
    if ($("nav").hasClass("reducedMenu")) {
      $("nav").removeClass("reducedMenu");
    } else {
      $("nav").addClass("reducedMenu");
    }
  });

  $(document).on("click", function () {
    if ($("nav").hasClass("reducedMenu")) {
      $("nav").removeClass("reducedMenu");
      $("#burger").removeClass("open");
    }
  });

  $(window)
    .on("resize", function () {
      if ($(this).width() > 1500) {
        $("nav").removeClass("reducedMenu");
      }
    })
    .trigger("resize");
});

// ----------- Define custom components -------------

window.customElements.define(
  "loading-bar",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
            <div id="preloader" class="d-flex flex-column justify-content-center">
                <p> Démarrage ...</p>
                <div class="progress">
                    <div class="progress-value"></div>
                </div>
            </div>`;
    }
  }
);

window.customElements.define(
  "menu-burger",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div id="divBurger">
            <div id="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>`;
    }
  }
);

window.customElements.define(
  "nav-custom",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <nav id="nav" class="flex-row justify-content-center listeBtn2">
        <button id="b0" class="btn-success" onclick="window.location='index.html';">getProfil()</button>
        <button id="b1" class="btn-success" onclick="window.location='experiences.html';">getExpériences()</button>
        <button id="b2" class="btn-success" onclick="window.location='competences.html';">getCompétences()</button>
        <button id="b3" class="btn-success" onclick="window.location='formations.html';">getFormations()</button>
        <button id="b4" class="btn-success" onclick="window.location='projets.html';">getProjets()</button>
        <button id="b5" class="btn-success" onclick="window.location='contact.php';">getContact()</button>
        <button id="b6" class="btn-success" onclick="window.open('doc/cv-2026.pdf')">getCV()</button>
    </nav>
    `;
    }
  }
);

window.customElements.define(
  "bubble-custom",
  class extends HTMLElement {
    connectedCallback() {
      const getSize = this.getAttribute("size") || "getSize()";
      const getText = this.getAttribute("text") || "getText()";
      const getImage = this.getAttribute("image") || "getImage()";

      this.innerHTML = `
      <div class="te" onclick="openBubble(this, '${getSize}')">
        <img
          width="50"
          src="${getImage}"
          alt="${getText}"
          title="${getText}"
        />
        <p>${getText}</p>
      </div>
    `;
    }
  }
);
