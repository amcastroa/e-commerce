function toggleVisibilityOnClick(triggerElement, targetElement) {

  triggerElement.addEventListener('click', function () {
    targetElement.classList.toggle('main__section--cartActive')
    console.log('hola');
  })


}
export default toggleVisibilityOnClick