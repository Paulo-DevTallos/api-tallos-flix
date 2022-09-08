import * as bcrypt from 'bcryptjs';

export class Encript {
  static encodePassword(pass: string) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(pass, salt);
  }

  static async ComparePassword(enterPass: string, userPass: string) {
    return await bcrypt.compare(enterPass, userPass);
  }
}
