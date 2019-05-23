import helloWorldApp from '../../helloWorldApp';

const helloWorldFactory = () => {
  const getHelloWorld = () => 'Hello World';

  return {
    getHelloWorld,
  };
};

helloWorldApp.factory('helloWorldFactory', helloWorldFactory);
