const popoverClick = (
  <Popover id="popover-trigger-click" title="Popover bottom">
    <strong>Popover trigger text</strong> more text.
  </Popover>
);

const popoverHoverFocus = (
  <Popover id="popover-trigger-hover-focus" title="Popover bottom">
    <strong>Popover trigger text</strong> more text.
  </Popover>
);

const popoverFocus = (
  <Popover id="popover-trigger-focus" title="Popover bottom">
    <strong>Popover trigger text</strong> more text.
  </Popover>
);

const popoverClickRootClose = (
  <Popover id="popover-trigger-click-root-close" title="Popover bottom">
    <strong>Popover trigger text</strong> more text.
  </Popover>
);

ReactDOM.render((
  <ButtonToolbar>
    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
      <Button>Click</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
      <Button>Hover + Focus</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="focus" placement="bottom" overlay={popoverFocus}>
      <Button>Focus</Button>
    </OverlayTrigger>
    <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
      <Button>Click w/rootClose</Button>
    </OverlayTrigger>
  </ButtonToolbar>
), mountNode);
