interface Props {
  listNameId: string; //
}

export function dragLib({ listNameId }: Props) {
  var ele: any = document?.getElementById(listNameId);
  try {
    ele.style.cursor = "grab";
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e: any) {
      ele.style.cursor = "grabbing";
      ele.style.userSelect = "none";
      pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };

    const mouseMoveHandler = function (e: any) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);

      ele.style.cursor = "grab";
      ele.style.removeProperty("user-select");
    };

    // Attach the handler
    ele.addEventListener("mousedown", mouseDownHandler);
  } catch (error) {}
}
