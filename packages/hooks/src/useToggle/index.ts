import { useMemo, useState } from 'react';

export interface Actions<T = boolean> {
  toggle: () => void;
  set: (value?: T) => void;
  setLeft: () => void;
  setRight: () => void;
}
function useToggle<T = boolean>(): [boolean, Actions<T>];

function useToggle<T>(defaultValue: T): [T, Actions<T>];

function useToggle<D, R>(defaultValue: D = false as D, reverseValue?: R) {
  const [state, setState] = useState<D | R>(defaultValue);
  const actions = useMemo(() => {
    const reverseValueOrigin = reverseValue === undefined ? !defaultValue : (reverseValue as D | R);
    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);
    const set = (value: D | R) => setState(value);
    return {
      toggle,
      setLeft,
      setRight,
      set
    };
  }, []);
  return [state, actions];
}

export default useToggle;
