import { Constants } from "expo";
import { Platform } from "react-native";

const localhost =
 Platform.OS === "ios" ? "exp://10.234.84.37:19000" : "10.0.2.2:8080";

const ENV = {
 dev: {
   apiUrl: "exp://10.234.84.37:19000",
   amplitudeApiKey: "cddb6950-6224-47fc-9458-d41ba4e70ee3",
   amplitudeApiSecret: "80697a23d0bb3f7f94f1805aef3bebc3e412b93b"
 }
//  staging: {
//    apiUrl: "[your.staging.api.here]",
//    amplitudeApiKey: "[Enter your key here]",
//    // Add other keys you want here
//  },
//  prod: {
//    apiUrl: "[your.production.api.here]",
//    amplitudeApiKey: "[Enter your key here]",
//    // Add other keys you want here
//  }
};

const getEnvVars = () => {
 // What is __DEV__ ?
 // This variable is set to true when react-native is running in Dev mode.
 // __DEV__ is true when run locally, but false when published.
  // const ENV = Constants.manifest.releaseChannel;
  return ENV.dev;

};

export default getEnvVars;