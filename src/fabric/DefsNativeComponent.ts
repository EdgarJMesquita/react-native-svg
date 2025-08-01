import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type {
  Float,
  Int32,
  WithDefault,
} from 'react-native/Libraries/Types/CodegenTypes';
import type { ViewProps } from './utils';
import type { UnsafeMixed } from './codegenUtils';

interface SvgNodeCommonProps {
  name?: string;
  opacity?: UnsafeMixed<Float | string>;
  matrix?: ReadonlyArray<Float>;
  mask?: string;
  markerStart?: string;
  markerMid?: string;
  markerEnd?: string;
  clipPath?: string;
  clipRule?: WithDefault<Int32, 0>;
  responsible?: boolean;
  display?: string;
  pointerEvents?: string;
}

interface NativeProps extends ViewProps, SvgNodeCommonProps {}

export default codegenNativeComponent<NativeProps>('RNSVGDefs', {
  interfaceOnly: true,
});
