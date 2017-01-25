import reactCommon from '../../src/react-common';

describe('reactCommon', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(reactCommon, 'greet');
      reactCommon.greet();
    });

    it('should have been run once', () => {
      expect(reactCommon.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(reactCommon.greet).to.have.always.returned('hello');
    });
  });
});
