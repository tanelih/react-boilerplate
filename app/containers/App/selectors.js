
export function selectLocationState() {

  let prevRoutingState   = null
  let prevRoutingStateJS = null

  return state => {
    const routingState = state.get('route')

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState   = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

