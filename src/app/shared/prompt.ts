export class Prompt {
  constructor(
    public value: string,
    public emphasis: number = 0
  ) {}
  toString(): string {
    if (this.emphasis > 0) {
      return '('.repeat(this.emphasis) + this.value + ')'.repeat(this.emphasis);
    }
    if (this.emphasis < 0) {
      return '['.repeat(-1 * this.emphasis) + this.value + ']'.repeat(-1 * this.emphasis);
    }
    return this.value;
  }
  static create(value: string, emphasis: number = 0): Prompt {
    return new Prompt(value, emphasis);
  }
}
