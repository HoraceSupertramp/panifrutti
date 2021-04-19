import React, {useCallback} from 'react';
import {openCartPopup, openSideMenu, selectView} from "../../store/actions/utils-actions";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../app.types";
import CartPopUp from "../cart/CartPopUp";

const TopBar: React.FC = () => {

    const activeView = useSelector<AppState,string>(state => state.selectedView)
    const cartPopup = useSelector<AppState,boolean>((state: AppState) => state.cartPopupAppear)
    const userToken = useSelector<AppState,string>( (state : AppState) => state.userToken);

    let dispatch = useDispatch();

    let selectViewHandler =  useCallback((str : string) => (e : any)=>{
        e.preventDefault();
        dispatch(selectView(str));
    },[])

    let openMenuHandler = useCallback((e : any)=>{
        e.preventDefault();
        dispatch(openSideMenu());
    },[]);

    let openCartPopupHandler = useCallback((view : string) => ()=>{
        if(view !== "cart") dispatch(openCartPopup());
    },[]);

    return (
      <header>
          <div className="WrapTitle">
              {(userToken != "") &&
                  <div className="SquaredButtons" id="menu-button-container" onClick={openMenuHandler}>

                      <svg id="burger-menu-svg" viewBox="0 -53 384 384"  xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                      <path
                          d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                      <path
                          d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                  </svg>
              </div>}
              <h1 id="title" onClick={selectViewHandler("categories")} > PANIFRUTTI </h1>
          </div>
          {(userToken != "") &&
              <div className="SquaredButtons" id="cart-button-container" onClick={openCartPopupHandler(activeView)}>
                  <svg id="cart-button-svg" viewBox="0 -31 512.00026 512" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"/>
                      <path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
                      <path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/>
                  </svg>
          </div>
          }
          {(activeView !== "cart" && cartPopup) && <CartPopUp/>}
      </header>
  );
}

export default TopBar;