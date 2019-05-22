import helloWorldApp from '../helloWorldApp';

const helloWorldCtrl = ($scope, helloWorldFactory) => {
  $scope.helloWorld = helloWorldFactory.getHelloWorld();
};

helloWorldApp.controller('helloWorldCtrl', helloWorldCtrl);
