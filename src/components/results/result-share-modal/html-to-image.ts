import { toSvg } from 'html-to-image';

export const createImage = async (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () =>
      setTimeout(() => {
        resolve(img);
      }, 200);
    img.decode = async () => resolve(img);
    img.onerror = reject;
    img.crossOrigin = 'anonymous';
    img.src = url;
  });
};

export const toPng = async (node: HTMLDivElement) => {
  const { offsetWidth: width, offsetHeight: height } = node;
  const multiple = 2;

  const svgDataUrl = await toSvg(node);

  const canvas = document.createElement('canvas');
  const offscreenCanvas = canvas.transferControlToOffscreen();
  offscreenCanvas.width = width * multiple;
  offscreenCanvas.height = height * multiple;
  const context = offscreenCanvas.getContext('2d', { alpha: false });
  if (context === null) return '';

  const img: HTMLImageElement = await createImage(svgDataUrl);
  let isDone = false;
  const onFrame = () => {
    context.drawImage(img, 0, 0, width * multiple, height * multiple);
    if (canvas.toDataURL('image/png', 1.0).length > 204800) isDone = true;
    if (!isDone) {
      window.requestAnimationFrame(onFrame);
    }
  };
  onFrame();

  return new Promise((resolve: (url: string) => void) => {
    setTimeout(() => {
      const url = canvas.toDataURL('image/png', 1.0);
      resolve(url);
    }, 500);
  });
};
