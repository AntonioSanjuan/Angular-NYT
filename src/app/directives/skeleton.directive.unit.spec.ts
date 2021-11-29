import { SkeletonDirective } from './skeleton.directive';

describe('SkeletonDirective unit tests', () => {
  let directive: SkeletonDirective;

  const elMock = {
    querySelectorAll: jest.fn(() => {}),
  } as any;

  const rendererMock = {
    addClass: jest.fn(() => {
      return;
    }),
    removeClass: jest.fn(() => {
      return;
    }),
  } as any;

  beforeEach(async () => {
    directive = new SkeletonDirective(elMock, rendererMock);
  });

  it('should create an directive instance', () => {
    expect(directive).toBeTruthy();
  });
});
