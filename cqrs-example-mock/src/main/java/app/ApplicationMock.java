package app;

import app.controller.LaureateControllerStubs;
import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.client.WireMock;
import com.github.tomakehurst.wiremock.common.ConsoleNotifier;
import com.github.tomakehurst.wiremock.core.WireMockConfiguration;

public final class ApplicationMock {

    private static final int PORT = 8090;

    private ApplicationMock() {
    }

    public static void main(String[] args) {

        String filePaths = null;
        if (args.length > 0) {
            filePaths = args[0];
        }

        final WireMockConfiguration wireMockConfiguration = WireMockConfiguration
                .wireMockConfig()
                .port(PORT)
                .notifier(new ConsoleNotifier(true));
        if (filePaths != null) {
            wireMockConfiguration.usingFilesUnderDirectory(filePaths);
        } else {
            wireMockConfiguration.usingFilesUnderClasspath("./");
        }


        final WireMockServer wireMockServer = new WireMockServer(wireMockConfiguration);

        wireMockServer.start();
        WireMock.configureFor("localhost", PORT);

        LaureateControllerStubs.addStubs();

    }

}
