/*
 * ================================================
 * PlugName: Toast
 * ================================================
 */
;(function($, window, document, undefined) {
    'use strict';
    
    //默认参数
    var defaults = {
        type: null,
        info: null,
        time: null,
    };
    
    /*
     * 构造函数
     * @param $element
     */
    function Toast(options) {
        this.options = $.extend(defaults, options || {});
        this.init();
    }
    
    /*
     * 初始化函数
     */
    Toast.prototype.init = function() {
        var _this   = this,
            options = _this.options;
            
        _this.$body = $('body');
        
        _this.createDOM();
        
        if (options.type === 'success') {
            _this.$toastContent.append(_this.$toastSuccess);
        } else if (options.type === 'error') {
            _this.$toastContent.append(_this.$toastError);
        } else if (options.type === 'loading') {
            _this.$toastContent.append(_this.$toastLoading);
        }
        
        if (options.info) {
            _this.$toastContent.append($('<p>' + options.info + '</p>'))
        }
        
        _this.show();
        
        if (!(options.time === 'infinite')) {
            setTimeout(function() {
                _this.close();
            }, Number(options.time));
        }
    }
    
    Toast.prototype.createDOM = function() {
        var _this = this;
        
        _this.$toastElement = $('<div class="u-toast">' +
                                '    <div class="toast-content"></div>' +
                                '</div>');
                                
        _this.$toastContent = _this.$toastElement.find('.toast-content');
        
        //成功
        _this.$toastSuccess = $('<span class="u-icon icon-success"></span>');
        //失败
        _this.$toastError   = $('<span class="u-icon icon-error"></span>');
        //loading
        _this.$toastLoading = $('<span class="u-icon icon-loading"></span>');
    }
    
    Toast.prototype.show = function() {
        var _this = this;
        
        _this.$body.append(_this.$toastElement);
    };
    
    Toast.prototype.close = function() {
        var _this = this;
        
        _this.$toastElement.remove();
    };
    
    $.extend({
        toast: function(options) {
            new Toast(options);
        }
    });
    
})(jQuery, window, document, undefined);
