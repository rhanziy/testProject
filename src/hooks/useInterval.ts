import {useState, useCallback, useRef, useEffect} from 'react';

type IntervalFunction = () => void;

const useInterval = (callback: IntervalFunction, delay: number | null) => {
  const savedCallback = useRef<IntervalFunction | null>(null);
  const [_delay, setDelay] = useState<number | null>(delay);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }

    if (_delay !== null) {
      let id = setInterval(tick, _delay);
      return () => clearInterval(id);
    }
  }, [_delay]);

  const stop = useCallback(() => {
    setDelay(null);
  }, []);

  const restart = useCallback(() => {
    setDelay(delay);
  }, [delay]);

  return {stop, restart};
};

export default useInterval;
