import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

var $ = jQuery;

class onFocus {

    private run: number;

    constructor(){
        var $this = this;
        $this.run = $this.init();
    }

    public init():number {
        var $this = this;
        $(document).ready(function () {
            $this.addFocusClass();
            $this.keyUpObserve();
            $this.clickLink();
        });
        return 0;
    }

    private addFocusClass():void {
        $(".form-control").focus(function () {
            $(this).prev().addClass("on-focus");
        }).focusout(function () {
            $(".form-label").removeClass("on-focus");
        })
    }

    private keyUpObserve():void {
        $(".form-control").keyup(function () {
            if ($(this).val().length > 0) {
                $(this).prev().addClass("filled");
            } else {
                $(this).prev().removeClass("filled");
            }
        })
    }

    private clickLink():void {
        $(".link").click(function () {
            var open = $(this).data("open");
            var close = $(this).data("close");

            $("#" + close).animate({
                'opacity': 0,
                'top':+100
            },500 , function () {
                $(this).removeClass("open").addClass("close").removeAttr("style");
                $("#" + open).removeClass("close").addClass("open");

            })

        });
    }

}

var run = new onFocus();

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
