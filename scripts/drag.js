

_item = null;

mouse_x = 0;
mouse_y = 0;

ele_x = 0;
ele_y = 0;

function move_init()
{
  document.onmousemove = _move;
  document.onmouseup = _stop;
}

function _stop()
{
  _item = null;
}

function _move(e)
{
  mouse_x = window.event.clientX;
  mouse_y = window.event.clientY;
  if(_item != null)
  {
    _item.style.position="absolute";
    //_item.style.left = (mouse_x - ele_x) + "px";
    _item.style.top = (mouse_y - ele_y) + "px";
  }
}

function _move_item(ele)
{
  _item = ele;
  ele_x = mouse_x - _item.offsetLeft;
  ele_y = mouse_y - _item.offsetTop;
}

