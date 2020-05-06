import dogsRoute from './dogsRoute';

export default app => {
  app.use('/dogs', dogsRoute);

};
