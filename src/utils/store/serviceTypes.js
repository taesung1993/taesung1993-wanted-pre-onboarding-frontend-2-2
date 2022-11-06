import { atom, selector } from 'recoil';
import DropDownItem from '../classes/DropDownItem';

const SERVICE_TYPES = {
  MAD_UP: 'mad-up',
  ADD_SERVICE: 'add-service'
};

const serviceTypesState = atom({
  key: 'serviceTypeState',
  default: [
    new DropDownItem(SERVICE_TYPES.MAD_UP, '매드업'),
    new DropDownItem(SERVICE_TYPES.ADD_SERVICE, '서비스 추가')
  ]
});

const selectedServiceTypeIdState = atom({
  key: 'selectedServiceTypeState',
  default: 'mad-up'
});

const selectedServiceTypeState = selector({
  key: 'FilteredTodoList',
  get: ({ get }) => {
    const serviceTypes = get(serviceTypesState);
    const selectedId = get(selectedServiceTypeIdState);

    switch (selectedId) {
      case SERVICE_TYPES.MAD_UP:
        return serviceTypes.find(({ key }) => key === SERVICE_TYPES.MAD_UP);
      case SERVICE_TYPES.ADD_SERVICE:
        return serviceTypes.find(
          ({ key }) => key === SERVICE_TYPES.ADD_SERVICE
        );
      default:
        throw new Error('존재하지 않는 서비스 타입 아이디입니다.');
    }
  }
});

export default {
  SERVICE_TYPES,
  serviceTypesState,
  selectedServiceTypeIdState,
  selectedServiceTypeState
};
