import * as bcrypt from 'bcrypt';

export function encodePassword(rawpassword: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawpassword, SALT);
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
