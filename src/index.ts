import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the webify extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'webify:plugin',
  description: 'A JupyterLab extension to copy files from a jupyter lab user folder to a different folder (to be served on a web)',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension webify is activated!');
  }
};

export default plugin;
