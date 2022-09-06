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

/*export default {
  encript: async (pass: string) => {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(pass, salt);
  },
};*/

/*export class Encript {
  static async CriptPassword(pass: string) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hashSync(pass, salt);
  }
}*/
