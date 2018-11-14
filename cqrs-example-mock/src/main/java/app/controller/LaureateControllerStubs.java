package app.controller;

import static com.github.tomakehurst.wiremock.client.WireMock.*;

public final class LaureateControllerStubs {

    private LaureateControllerStubs() {
    }

    public static void addStubs() {

        stubFor(get(urlEqualTo("/laureate/getLaureates")).willReturn(aResponse()
                .withHeader("Access-Control-Allow-Origin", "*")
                .withHeader("Content-type", "application/json")
                .withHeader("charset", "utf-8")
                .withStatus(200).withBodyFile("laureates.json")));

        stubFor(get(urlEqualTo("/laureate/getFields")).willReturn(aResponse()
                .withHeader("Access-Control-Allow-Origin", "*")
                .withHeader("Content-type", "application/json")
                .withHeader("charset", "utf-8")
                .withStatus(200).withBodyFile("fields.json")));

        stubFor(get(urlMatching("/laureate/getLaureate/[a-z0-9]+")).willReturn(aResponse()
                .withHeader("Access-Control-Allow-Origin", "*")
                .withHeader("Content-type", "application/json")
                .withHeader("charset", "utf-8")
                .withStatus(200).withBodyFile("laureate.json")));

    }
}
