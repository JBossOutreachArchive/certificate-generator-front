import { Injectable, Injector} from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { CertificateComponent } from '../core/certificate/certificate.component';
import {CERT} from "../core/certificate/certificate-display.tokens";

@Injectable({
  providedIn: 'root'
})
export class CertDisplayService {

  constructor(private overlay: Overlay, private injector:Injector) { }

  private overlayRef:any;

  displayCert(cert:object){
    const injectionTokens = new WeakMap()
    injectionTokens.set(CERT,cert)
    const injector = new PortalInjector(this.injector,injectionTokens)
    // CertificateComponent.cert = cert
    const positionStrategy = this.overlay.position()
    .global()
    .centerHorizontally()
    .centerVertically();
    const config = new OverlayConfig({
      hasBackdrop:true,
      backdropClass: 'dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    })
    const certPortal = new ComponentPortal(CertificateComponent,null,injector)
    const overlayRef = this.overlay.create(config)
    overlayRef.attach(certPortal)
    this.overlayRef = overlayRef
    this.overlayRef.backdropClick().subscribe(() => this.close(), () => console.log("ERROR"), () => console.log("COMPLETE"));
    return overlayRef
  }
  close(){
    this.overlayRef.dispose()
  }
}
