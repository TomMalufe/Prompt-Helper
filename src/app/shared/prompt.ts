export class Prompt {
  public emphasis: number = 0;
  constructor(public value: string) {}
  toString(): string {
    if (this.emphasis > 0) {
      return '('.repeat(this.emphasis) + this.value + ')'.repeat(this.emphasis);
    }
    if (this.emphasis < 0) {
      return '['.repeat(-1 * this.emphasis) + this.value + ']'.repeat(-1 * this.emphasis);
    }
    return this.value;
  }
  static create(value: string): Prompt {
    return new Prompt(value);
  }
}
