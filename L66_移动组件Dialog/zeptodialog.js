/**
 * Created by LXH on 16/11/17.
 */
;(function ($) {
    var Dialog = function (config) {
        // alert("dd");
        var _this_ = this;
        this.config = {
            type: "waiting",
            buttons: null,
            delay: null,
            message: null,
            width: "auto",
            height: "auto",
            maskOpacity: null,

        };
        //默认参数扩展
        if (config && $.isPlainObject(config)) {
            $.extend(this.config, config);
        } else {
            this.isConfig = true;
        }
        //创建基本的dom
        this.body = $("body");
        this.mask = $('<div class="g-dialog-contianer">');
        this.win = $('<div class="dialog-window">');
        this.winHeader = $('<div class="dialog-header"></div>');
        this.winContent = $('<div class="dialog-content">');
        this.winFooter = $('<div class="dialog-footer">');

        this.create();
    };
    Dialog.prototype = {
        create: function () {
            var _this_ = this,
                config = this.config,
                mask = this.mask,
                win = this.win,
                header = this.winHeader,
                content = this.winContent,
                footer = this.winFooter,
                body = this.body;

            if (this.isConfig) {
                //如果没有传递配置参数,
                win.append(header.addClass("waiting"));
                mask.append(win);
                body.append(mask);
            } else {
                header.addClass(config.type);
                win.append(header);
                if (config.message) {
                    win.append(content.html(config.message));
                }
                if (config.buttons) {
                    this.createButtons(config.buttons, footer);
                    win.append(footer);
                }
                mask.append(win);
                body.append(mask);
                if (config.width != "auto") {
                    win.width(config.width);
                }
                if (config.height != "auto") {
                    win.height(config.height);
                }

                if (config.maskOpacity) {
                    mask.css("backgroundColor", "rgba(0,0,0," + config.maskOpacity + ")");
                }

                if (config.delay && config.delay != 0) {
                    window.setTimeout(function () {
                        _this_.close();
                    }, config.delay);
                }
            }
        },

        close: function () {
            this.mask.remove();
        },
        createButtons: function (buttons, footer) {
            var _this_ = this;
            $(buttons).each(function () {
                var type = this.type ? " class='" + this.type + "'" : "";
                var btnText = this.text ? this.text : "按钮" + (++i);
                var callBack = this.callback ? this.callback : null;
                var button = $("<button" + type + ">" + btnText + "</button>");
                if (callBack) {
                    button.on('click', function () {
                        var isShowDialog = callBack();
                        if (!isShowDialog) {//true
                            _this_.close();
                        }
                    });
                    // button.tap(function () {
                    //     callBack();
                    //     _this_.close();
                    // });
                } else {
                    button.on('click', function () {
                        _this_.close();
                    });
                }

                footer.append(button);
            });
        }
    };
    window.Dialog = Dialog;
   $.dialog=function (config) {
       return new Dialog(config);
   }
})(Zepto);