import { ALERT_SHOW_TIME } from './constants.js';

const showErrorAlert = (message) => {
  const alertContainerNode = document.createElement('div');

  alertContainerNode.style.zIndex = '100';
  alertContainerNode.style.position = 'absolute';
  alertContainerNode.style.left = '25%';
  alertContainerNode.style.right = '25%';
  alertContainerNode.style.top = '-50px';

  alertContainerNode.style.fontSize = '18px';
  alertContainerNode.style.textAlign = 'center';
  alertContainerNode.style.textTransform = 'none';
  alertContainerNode.style.color = 'whitesmoke';

  alertContainerNode.style.padding = '10px 30px';
  alertContainerNode.style.backgroundColor = '#CC0000';
  alertContainerNode.style.borderRadius = '0px 0px 5px 5px';

  alertContainerNode.textContent = message;
  document.body.append(alertContainerNode);

  alertContainerNode.animate(
    [
      { transform: 'translateY(-50px)' },
      { transform: 'translateY(50px)' },
      { transform: 'translateY(50px)' },
      { transform: 'translateY(50px)' },
      { transform: 'translateY(50px)' },
      { transform: 'translateY(50px)' },
      { transform: 'translateY(-50px)' },
    ],
    {
      duration: ALERT_SHOW_TIME,
      iterations: 1
    }
  );

  setTimeout(() => {
    alertContainerNode.remove();
  }, ALERT_SHOW_TIME);
};

export { showErrorAlert };
