(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{479:function(t,e,a){"use strict";a.r(e);var s=a(18),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"poll-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#poll-state"}},[t._v("#")]),t._v(" Poll State")]),t._v(" "),a("p",[t._v("Polls for the state at regular intervals, optionally also outputting at the start and when the state changes. Useful for either alert for non-communicating devices (time since change > 1 day for example) or dashboard graphs with consistent interval charts")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h3",{attrs:{id:"entity-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity-id"}},[t._v("#")]),t._v(" Entity ID "),a("Badge",{attrs:{text:"required"}})],1),t._v(" "),a("p",[t._v("The entity id of the entity to poll for.")]),t._v(" "),a("h3",{attrs:{id:"update-interval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-interval"}},[t._v("#")]),t._v(" Update Interval")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number")])])]),t._v(" "),a("p",[t._v("The amount of time between checking/sending updates.")]),t._v(" "),a("h3",{attrs:{id:"if-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-state"}},[t._v("#")]),t._v(" If State")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("If the conditional statement is evaluated as true send the message to the first output otherwise send it to the second output. If blank there will only be one output.")]),t._v(" "),a("p",[a("strong",[t._v("Also see:")])]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/guide/conditionals.html"}},[t._v("Conditionals")])],1)]),t._v(" "),a("h3",{attrs:{id:"state-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-type"}},[t._v("#")]),t._v(" State Type")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("Convert the state of the entity to the selected type. Boolean will be converted to true based on if the string is equal by default to (y|yes|true|on|home|open). Original value stored in msg.data.original_state")]),t._v(" "),a("h3",{attrs:{id:"output-initially"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-initially"}},[t._v("#")]),t._v(" Output Initially")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("Output once on startup/deploy then on each interval")]),t._v(" "),a("h3",{attrs:{id:"expose-to-home-assistant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose-to-home-assistant"}},[t._v("#")]),t._v(" Expose to Home Assistant")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("Creates a switch within Home Assistant to enable/disable this node. This feature requires "),a("a",{attrs:{href:"https://github.com/zachowj/hass-node-red",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node-RED custom integration"),a("OutboundLink")],1),t._v(" to be installed in Home Assistant")]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"topic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#topic"}},[t._v("#")]),t._v(" topic")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("entity_id of changed entity")]),t._v(" "),a("h3",{attrs:{id:"payload-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload-data"}},[t._v("#")]),t._v(" payload.data")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("object")])])]),t._v(" "),a("p",[t._v("The last known state of the entity")]),t._v(" "),a("h3",{attrs:{id:"payload-data-timesincechanged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload-data-timesincechanged"}},[t._v("#")]),t._v(" payload.data.timeSinceChanged")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v('Human readable format string of time since last updated, example "1 hour ago"')]),t._v(" "),a("h3",{attrs:{id:"payload-data-timesincechangedms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload-data-timesincechangedms"}},[t._v("#")]),t._v(" payload.data.timeSinceChangedMs")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("number")])])]),t._v(" "),a("p",[t._v("Number of milliseconds since last changed")]),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://home-assistant.io/docs/configuration/state_object/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Home Assistant State Objects"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[t._v("#")]),t._v(" Changelog")]),t._v(" "),a("h4",{attrs:{id:"version-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-1"}},[t._v("#")]),t._v(" Version 1")]),t._v(" "),a("ul",[a("li",[t._v('"if state"/"halt if" will now send the message to the first output if true and to the second if not. The old behavior, sending the message to the second output if true, will continue to be in place until you edit one of the existing nodes via the UI and at that time the outputs will automatically be switched.')])])])}),[],!1,null,null,null);e.default=i.exports}}]);