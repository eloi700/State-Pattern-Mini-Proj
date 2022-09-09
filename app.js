class PageState {
  constructor() {
    let currentState = new homeState(this);

    this.init = function () {
      this.change(new homeState());
    };

    this.change = function (state) {
      currentState = state;
    };
  }
}

//Home State
const homeState = function () {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
  <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
  </div>
    `;
};

//About State
const aboutState = function () {
  document.querySelector("#heading").textContent = "About Us";
  document.querySelector("#content").innerHTML = `
    <p>This is about page.</p>
    <br>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione impedit doloribus aut ex id aliquam cumque tempora, odit facere porro deserunt! Voluptates est reiciendis odit suscipit rem, tempora porro voluptas? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti quasi eos explicabo illum mollitia, magni quisquam error sint veniam saepe voluptatum omnis rerum culpa. Hic, mollitia officiis optio ducimus eaque tempore qui sequi maxime consectetur, debitis eos fugit consequuntur natus, iusto culpa nihil perferendis in odit. Odit ipsa et sint laborum, deleniti nulla obcaecati voluptate neque doloribus doloremque laboriosam consequuntur magni quisquam praesentium aspernatur. Possimus ipsum, eligendi modi doloremque dolorum aperiam asperiores dicta? Soluta aperiam exercitationem nam nesciunt iure, itaque eius perferendis dolorum cum dignissimos unde ipsam deleniti porro earum quae distinctio voluptates reprehenderit! Nulla ipsa, consequuntur cum sequi modi quas corrupti, excepturi minus in dolorum magnam eos, ex error! Harum assumenda, nisi optio sit rerum doloribus totam explicabo inventore pariatur quas deleniti commodi porro non eveniet ab fugiat eaque minus dignissimos ipsa, iure mollitia, quisquam beatae quos molestias. Nam rem inventore praesentium quis labore delectus laboriosam temporibus cumque adipisci.</p>

    `;
};

//Contact State
const contactState = function () {
  document.querySelector("#heading").textContent = "Contact Us";
  document.querySelector("#content").innerHTML = `
    <form>
  <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control">
   </div>
  <div class="form-group">
  <label>Email address</label>
  <input type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
};

//Instantiate pageState
const page = new PageState();

//Init the first page
page.init();

//UI Variables
const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

//Event Listeners for Home, About and Contact
home.addEventListener("click", (e) => {
  page.change(new homeState());

  e.preventDefault();
});

about.addEventListener("click", (e) => {
  page.change(new aboutState());

  e.preventDefault();
});

contact.addEventListener("click", (e) => {
  page.change(new contactState());

  e.preventDefault();
});
