+ function($, window, document, undefined) {
    'use strict';
    
    //默认参数
    var defaults = {
        width: 100,
        height: 100,
        speed: 0
    };
    
    function BombEffect(element, options) {
        this.$element = $(element);
        this.options  = $.extend(defaults, options || {});
        this.init();
    }

    // 初始化
    BombEffect.prototype.init = function() {
        var _this = this,
            $el   = _this.$element,
            op    = _this.options;

        // 设置样式
        $el.css({
            height: op.height + 'px',
            width: op.width + 'px',
            position: 'fixed',
            left: window.innerWidth - op.width + 'px',
            top: window.innerHeight - op.height + 'px',
            display: 'block',
            'z-index': 9999
        })

        // 关闭按钮
        _this.$close = $el.find('.bombeffect-close');

        // isRight
        _this.isRigth = true;
        // isTop
        _this.isTop = true;

        // 窗口宽度
        _this.winWidth  = window.innerWidth;

        // 窗口高度
        _this.winHeight = window.innerHeight;

        // element定位left最大值
        _this.bombLeft = _this.winWidth - op.width;

        // element定位top最大值
        _this.bombTop = _this.winHeight - op.height;

        $(window).resize(function() {
            // 窗口宽度
            _this.winWidth  = window.innerWidth;

            // 窗口高度
            _this.winHeight = window.innerHeight;

            // element定位left最大值
            _this.bombLeft = _this.winWidth - op.width;

            // element定位top最大值
            _this.bombTop = _this.winHeight - op.height;
        });

        $el.mouseout(function() {
            _this.run();
        });
        $el.mouseover(function() {
            clearInterval(_this.timer);
        });
        _this.$close.on('click', function() {
            $el.remove();
        });
        _this.run();
    }

    // 开始动画
    BombEffect.prototype.run = function(cb) {
        var _this = this;
        _this.timer = setInterval(function() {
            _this.top();
            _this.right();
            _this.left();
            _this.down();
        }, _this.options.speed);
    }

    // 向上移动
    BombEffect.prototype.top = function() {
        var _this = this,
            $el = _this.$element,
            top = parseInt($el.css('top'));
        if (_this.isTop) {
            if (top === 0) {
                _this.isTop = false;
                _this.down();
            } else {
                $el.css({
                    top: -- top,
                })
            }
        } else {
            return
        }
    }

    // 向下移动
    BombEffect.prototype.down = function() {
        var _this = this,
            $el = _this.$element,
            top = parseInt($el.css('top'));
        if (!_this.isTop) {
            if (top === _this.bombTop) {
                _this.isTop = true;
                _this.top();
            } else {
                $el.css({
                    top: ++ top,
                })
            }
        } else {
            return
        }
    }

    // 向右移动
    BombEffect.prototype.right = function() {
        var _this = this,
            $el = _this.$element,
            left = parseInt($el.css('left'));
        if (_this.isRigth) {
            if (left === _this.bombLeft) {
                _this.isRigth = false;
                _this.left();
            } else {
                $el.css({
                    left: ++ left,
                })
            }
        } else {
            return
        }
        
    }

    // 向左移动
    BombEffect.prototype.left = function() {
        var _this = this,
            $el = _this.$element,
            left = parseInt($el.css('left'));
        if (!_this.isRigth) {
            if (left === 0) {
                _this.isRigth = true;
                _this.right();
            } else {
                $el.css({
                    left: -- left,
                })
            } 
        }
           
    }

    // 
    $.fn.BombEffect = function(options) {
        var options = $.extend(defaults, options || {});

        return new BombEffect(this, options);
    }
}(jQuery, window, document, undefined);