import { create } from 'jss'; // eslint-disable-line
import { jssPreset } from 'material-ui/styles';

const jss = create(jssPreset());
jss.options.createGenerateClassName = () => (rule, sheet) => `${sheet.options.name}--${rule.key}`;

export default jss;
