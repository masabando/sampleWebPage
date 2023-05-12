class Hello {

  constructor(name) {
    this.name = name;
  }

  say(text) {
    alert(`${this.name} さん，${text}！`);
  }

}

export default Hello;
