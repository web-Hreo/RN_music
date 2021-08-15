import {observable} from 'mobx';
class RootStore {
  //es7装饰器 object.defineProperty
  @observable
  name = '悟空';
}

export default new RootStore();
