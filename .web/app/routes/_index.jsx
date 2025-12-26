import {Fragment,useCallback,useContext,useEffect} from "react"
import {Box as RadixThemesBox,Button as RadixThemesButton,Flex as RadixThemesFlex,Grid as RadixThemesGrid,Heading as RadixThemesHeading,Separator as RadixThemesSeparator,Text as RadixThemesText,TextArea as RadixThemesTextArea,TextField as RadixThemesTextField} from "@radix-ui/themes"
import {EventLoopContext,StateContexts} from "$/utils/context"
import {ReflexEvent,isTrue} from "$/utils/state"
import {jsx} from "@emotion/react"




function Button_97ff6666b8dbfe105c76bab8ca488837 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_6cbcc6f99c1741a4d6e24c3e00909352 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.dev_language___dev_language____state.open_add_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"blue",css:({ ["marginTop"] : "1em", ["marginBottom"] : "1em" }),onClick:on_click_6cbcc6f99c1741a4d6e24c3e00909352,size:"3"},"+ A\u00f1adir Lenguaje")
  )
}


function Grid_368276d842e2c0e0ecdc4089b2a54b3f () {
  const reflex___state____state__dev_language___dev_language____state = useContext(StateContexts.reflex___state____state__dev_language___dev_language____state)
const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    jsx(RadixThemesGrid,{columns:"3",css:({ ["width"] : "100%", ["maxWidth"] : "800px" }),gap:"4"},Array.prototype.map.call(reflex___state____state__dev_language___dev_language____state.languages_rx_state_ ?? [],((language_rx_state_,index_8d401cdba404cc4a3514331ee24f22a5)=>(jsx(RadixThemesBox,{css:({ ["background"] : "rgba(255, 255, 255, 0.05)", ["borderRadius"] : "lg", ["position"] : "relative", ["&:hover"] : ({ ["background"] : "rgba(255, 255, 255, 0.1)", ["transform"] : "scale(1.05)" }), ["transition"] : "all 0.2s", ["cursor"] : "pointer" }),key:index_8d401cdba404cc4a3514331ee24f22a5},jsx(RadixThemesButton,{color:"red",css:({ ["position"] : "absolute", ["top"] : "5px", ["right"] : "5px", ["zIndex"] : "10", ["cursor"] : "pointer", ["borderRadius"] : "full", ["padding"] : "0.2em" }),onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.dev_language___dev_language____state.delete_language", ({ ["language"] : language_rx_state_ }), ({  })))], [_e], ({  })))),size:"1",variant:"solid"},"X"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "1.5em", ["alignItems"] : "center", ["width"] : "100%", ["height"] : "100%" }),direction:"column",onClick:((_e) => (addEvents([(ReflexEvent("reflex___state____state.dev_language___dev_language____state.select_language", ({ ["language"] : language_rx_state_ }), ({  })))], [_e], ({  })))),gap:"3"},jsx("img",{css:({ ["width"] : "80px", ["height"] : "80px", ["objectFit"] : "contain" }),src:language_rx_state_?.["image"]},),jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold" })},language_rx_state_?.["name"])))))))
  )
}


function Heading_0dd2826fd74fa3c59da297926d4ab1ac () {
  const reflex___state____state__dev_language___dev_language____state = useContext(StateContexts.reflex___state____state__dev_language___dev_language____state)



  return (
    jsx(RadixThemesHeading,{size:"8"},reflex___state____state__dev_language___dev_language____state.selected_language_rx_state_?.["name"])
  )
}


function Img_bf653d9d3f5b8320bb75446813e9f8d5 () {
  const reflex___state____state__dev_language___dev_language____state = useContext(StateContexts.reflex___state____state__dev_language___dev_language____state)



  return (
    jsx("img",{css:({ ["width"] : "100px", ["height"] : "100px" }),src:reflex___state____state__dev_language___dev_language____state.selected_language_rx_state_?.["image"]},)
  )
}


function Text_d68f496408494393947fb77e32503810 () {
  const reflex___state____state__dev_language___dev_language____state = useContext(StateContexts.reflex___state____state__dev_language___dev_language____state)



  return (
    jsx(RadixThemesText,{as:"p"},reflex___state____state__dev_language___dev_language____state.selected_language_rx_state_?.["properties"])
  )
}


function Text_1959229358ba1f214bb105ee055e008e () {
  const reflex___state____state__dev_language___dev_language____state = useContext(StateContexts.reflex___state____state__dev_language___dev_language____state)



  return (
    jsx(RadixThemesText,{as:"p"},reflex___state____state__dev_language___dev_language____state.selected_language_rx_state_?.["usage"])
  )
}


function Button_2bbdfb5be2b34388980d4d9a04cd3e8d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_7e20e5c1638b055ffd3beafb1bbe2d84 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.dev_language___dev_language____state.clear_selection", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"red",css:({ ["marginTop"] : "1.5em" }),onClick:on_click_7e20e5c1638b055ffd3beafb1bbe2d84},"Cerrar")
  )
}


function Fragment_8d3e33b80df74955e15500335ac1788a () {
  const reflex___state____state__dev_language___dev_language____state = useContext(StateContexts.reflex___state____state__dev_language___dev_language____state)



  return (
    jsx(Fragment,{},(reflex___state____state__dev_language___dev_language____state.has_selection_rx_state_?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["background"] : "rgba(30, 30, 30, 0.95)", ["padding"] : "2em", ["borderRadius"] : "xl", ["border"] : "1px solid #666", ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)", ["zIndex"] : "1000", ["boxShadow"] : "0px 10px 30px rgba(0,0,0,0.8)", ["maxWidth"] : "400px", ["width"] : "90%", ["alignItems"] : "center", ["textAlign"] : "center" }),direction:"column",gap:"3"},jsx(Heading_0dd2826fd74fa3c59da297926d4ab1ac,{},),jsx(Img_bf653d9d3f5b8320bb75446813e9f8d5,{},),jsx(RadixThemesSeparator,{css:({ ["marginTop"] : "1em", ["marginBottom"] : "1em" }),size:"4"},),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["alignItems"] : "start", ["width"] : "100%" }),direction:"column",gap:"3"},jsx(RadixThemesBox,{css:({ ["marginBottom"] : "0.5em" })},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "lightblue" })},"Propiedades:"),jsx(Text_d68f496408494393947fb77e32503810,{},)),jsx(RadixThemesBox,{},jsx(RadixThemesText,{as:"p",css:({ ["fontWeight"] : "bold", ["color"] : "lightblue" })},"Para qu\u00e9 sirve:"),jsx(Text_1959229358ba1f214bb105ee055e008e,{},))),jsx(Button_2bbdfb5be2b34388980d4d9a04cd3e8d,{},)))):(jsx(Fragment,{},))))
  )
}


function Textfield__root_fbfe9d11f78ffa7636089535eb547255 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_11fbca7256249280ac6ea1f8d2fcb21e = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.dev_language___dev_language____state.set_new_name", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%" }),onChange:on_change_11fbca7256249280ac6ea1f8d2fcb21e,placeholder:"Ej: Rust"},)
  )
}


function Textfield__root_799c5afe9b82ae54bf6233c41d2bf980 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_4a62524896d8aa234cce844714f09c8a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.dev_language___dev_language____state.set_new_image", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextField.Root,{css:({ ["width"] : "100%" }),onChange:on_change_4a62524896d8aa234cce844714f09c8a,placeholder:"http://..."},)
  )
}


function Textarea_4dedf88f52af8af7844594db2d66fd0f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_ca61fe6d5c004699faf56e9511b1a455 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.dev_language___dev_language____state.set_new_properties", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextArea,{css:({ ["& textarea"] : null, ["width"] : "100%" }),onChange:on_change_ca61fe6d5c004699faf56e9511b1a455,placeholder:"Descripci\u00f3n..."},)
  )
}


function Textarea_dfe0ab3a3919a0204b6e83dcfc4bc3c6 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_change_f9b6bebc7612d16f075068fa119e4d0a = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.dev_language___dev_language____state.set_new_usage", ({ ["value"] : _e?.["target"]?.["value"] }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesTextArea,{css:({ ["& textarea"] : null, ["width"] : "100%" }),onChange:on_change_f9b6bebc7612d16f075068fa119e4d0a,placeholder:"Usos..."},)
  )
}


function Button_6791a3156bc02b9cc21cb8578f8a00ee () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_b4e69438f0ad05c178dcd04768ae8416 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.dev_language___dev_language____state.close_add_modal", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"gray",onClick:on_click_b4e69438f0ad05c178dcd04768ae8416},"Cancelar")
  )
}


function Button_7d2d61d54ff81ad59359a5dc876f79ae () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

const on_click_9005847470759e50c45cfa5acedb92f1 = useCallback(((_e) => (addEvents([(ReflexEvent("reflex___state____state.dev_language___dev_language____state.save_new_language", ({  }), ({  })))], [_e], ({  })))), [addEvents, ReflexEvent])

  return (
    jsx(RadixThemesButton,{color:"green",onClick:on_click_9005847470759e50c45cfa5acedb92f1},"Guardar")
  )
}


function Fragment_d30484ff03b965e29ab38c2eb8b22c9b () {
  const reflex___state____state__dev_language___dev_language____state = useContext(StateContexts.reflex___state____state__dev_language___dev_language____state)



  return (
    jsx(Fragment,{},(reflex___state____state__dev_language___dev_language____state.is_add_modal_open_rx_state_?(jsx(Fragment,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["background"] : "#222", ["padding"] : "2em", ["borderRadius"] : "xl", ["border"] : "1px solid #555", ["position"] : "fixed", ["top"] : "50%", ["left"] : "50%", ["transform"] : "translate(-50%, -50%)", ["zIndex"] : "1000", ["maxWidth"] : "500px", ["width"] : "90%", ["alignItems"] : "center" }),direction:"column",gap:"3"},jsx(RadixThemesHeading,{size:"6"},"A\u00f1adir Lenguaje"),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["width"] : "100%", ["alignItems"] : "start" }),direction:"column",gap:"3"},jsx(RadixThemesText,{as:"p"},"Nombre:"),jsx(Textfield__root_fbfe9d11f78ffa7636089535eb547255,{},),jsx(RadixThemesText,{as:"p"},"URL Imagen:"),jsx(Textfield__root_799c5afe9b82ae54bf6233c41d2bf980,{},),jsx(RadixThemesText,{as:"p"},"Propiedades:"),jsx(Textarea_4dedf88f52af8af7844594db2d66fd0f,{},),jsx(RadixThemesText,{as:"p"},"Usos:"),jsx(Textarea_dfe0ab3a3919a0204b6e83dcfc4bc3c6,{},)),jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["marginTop"] : "1.5em" }),direction:"row",gap:"4"},jsx(Button_6791a3156bc02b9cc21cb8578f8a00ee,{},),jsx(Button_7d2d61d54ff81ad59359a5dc876f79ae,{},))))):(jsx(Fragment,{},))))
  )
}


export default function Component() {





  return (
    jsx(Fragment,{},jsx(RadixThemesBox,{},jsx(RadixThemesFlex,{align:"start",className:"rx-Stack",css:({ ["padding"] : "2em", ["alignItems"] : "center", ["minHeight"] : "100vh", ["background"] : "#111", ["color"] : "white" }),direction:"column",gap:"3"},jsx(RadixThemesHeading,{size:"9"},"Diccionario de Lenguajes"),jsx(RadixThemesText,{as:"p",css:({ ["color"] : "gray.400" })},"Haz clic para ver detalles, a\u00f1ade uno nuevo o elim\u00ednalo con la X"),jsx(Button_97ff6666b8dbfe105c76bab8ca488837,{},),jsx(Grid_368276d842e2c0e0ecdc4089b2a54b3f,{},),jsx(Fragment_8d3e33b80df74955e15500335ac1788a,{},),jsx(Fragment_d30484ff03b965e29ab38c2eb8b22c9b,{},))),jsx("title",{},"DevLanguage | Index"),jsx("meta",{content:"favicon.ico",property:"og:image"},))
  )
}