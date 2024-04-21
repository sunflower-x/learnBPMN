import http from "../utils/request";

export function getXmlStr() {
  return http({
    url: "/getXMLStr",
    method: "get",
  });
}

