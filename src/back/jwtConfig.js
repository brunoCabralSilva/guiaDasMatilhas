// const jwt = require('jsonwebtoken');

// export const validation = (token) => {
//   try {
//       const jwtSecret = 'thiagoebrunokombiegarounordeste@2023';
//       jwt.verify(token, jwtSecret);
//       return true;
//   } catch (error) {
//       return false;
//   }
// }

// export const generate = (data) => {
//   const jwtSecret = 'thiagoebrunokombiegarounordeste@2023';
//   const jwtConfig = { expiresIn: '15d', algorithm: 'HS256' };
//   const token = jwt.sign(data.toJSON(), jwtSecret, jwtConfig);
//   console.log('token', token);
//   return token;
// }