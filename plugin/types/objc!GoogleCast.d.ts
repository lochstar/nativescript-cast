
declare const enum GCKActiveInputStatus {

	Unknown = -1,

	Inactive = 0,

	Active = 1
}

declare class GCKAdBreakClipInfo extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKAdBreakClipInfo; // inherited from NSObject

	static new(): GCKAdBreakClipInfo; // inherited from NSObject

	readonly adBreakClipID: string;

	readonly clickThroughURL: NSURL;

	readonly contentID: string;

	readonly contentURL: NSURL;

	readonly customData: any;

	readonly duration: number;

	readonly hlsSegmentFormat: GCKHLSSegmentFormat;

	readonly mimeType: string;

	readonly posterURL: NSURL;

	readonly title: string;

	readonly vastAdsRequest: GCKVASTAdsRequest;

	readonly whenSkippable: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKAdBreakClipInfoBuilder extends NSObject {

	static alloc(): GCKAdBreakClipInfoBuilder; // inherited from NSObject

	static new(): GCKAdBreakClipInfoBuilder; // inherited from NSObject

	adBreakClipID: string;

	clickThroughURL: NSURL;

	contentID: string;

	contentURL: NSURL;

	customData: any;

	duration: number;

	hlsSegmentFormat: GCKHLSSegmentFormat;

	mimeType: string;

	posterURL: NSURL;

	title: string;

	vastAdsRequest: GCKVASTAdsRequest;

	whenSkippable: number;

	constructor(o: { adBreakClipID: string; });

	constructor(o: { adBreakClipInfo: GCKAdBreakClipInfo; });

	build(): GCKAdBreakClipInfo;

	initWithAdBreakClipID(adBreakClipID: string): this;

	initWithAdBreakClipInfo(adBreakClipInfo: GCKAdBreakClipInfo): this;
}

declare class GCKAdBreakClipVastAdsRequest extends GCKVASTAdsRequest {

	static alloc(): GCKAdBreakClipVastAdsRequest; // inherited from NSObject

	static new(): GCKAdBreakClipVastAdsRequest; // inherited from NSObject
}

declare class GCKAdBreakInfo extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKAdBreakInfo; // inherited from NSObject

	static new(): GCKAdBreakInfo; // inherited from NSObject

	readonly adBreakClipIDs: NSArray<string>;

	readonly adBreakID: string;

	readonly embedded: boolean;

	readonly playbackPosition: number;

	readonly watched: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { playbackPosition: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithPlaybackPosition(playbackPosition: number): this;
}

declare class GCKAdBreakInfoBuilder extends NSObject {

	static alloc(): GCKAdBreakInfoBuilder; // inherited from NSObject

	static new(): GCKAdBreakInfoBuilder; // inherited from NSObject

	adBreakClipIDs: NSArray<string>;

	adBreakID: string;

	embedded: boolean;

	playbackPosition: number;

	watched: boolean;

	constructor(o: { adBreakID: string; adBreakClipIds: NSArray<string> | string[]; });

	constructor(o: { adBreakInfo: GCKAdBreakInfo; });

	build(): GCKAdBreakInfo;

	initWithAdBreakIDAdBreakClipIds(adBreakID: string, adBreakClipIDs: NSArray<string> | string[]): this;

	initWithAdBreakInfo(adBreakInfo: GCKAdBreakInfo): this;
}

declare class GCKAdBreakStatus extends NSObject implements NSCopying {

	static alloc(): GCKAdBreakStatus; // inherited from NSObject

	static new(): GCKAdBreakStatus; // inherited from NSObject

	readonly adBreakClipID: string;

	readonly adBreakID: string;

	readonly currentAdBreakClipTime: number;

	readonly currentAdBreakTime: number;

	readonly whenSkippable: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class GCKApplicationMetadata extends NSObject implements NSCopying {

	static alloc(): GCKApplicationMetadata; // inherited from NSObject

	static new(): GCKApplicationMetadata; // inherited from NSObject

	readonly applicationID: string;

	readonly applicationName: string;

	readonly iconURL: NSURL;

	readonly images: NSArray<GCKImage>;

	readonly namespaces: NSArray<string>;

	readonly senderApplicationInfo: GCKSenderApplicationInfo;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	senderAppIdentifier(): string;

	senderAppLaunchURL(): NSURL;
}

declare class GCKCastChannel extends NSObject {

	static alloc(): GCKCastChannel; // inherited from NSObject

	static new(): GCKCastChannel; // inherited from NSObject

	readonly isConnected: boolean;

	readonly isWritable: boolean;

	readonly protocolNamespace: string;

	constructor(o: { namespace: string; });

	didChangeWritableState(isWritable: boolean): void;

	didConnect(): void;

	didDisconnect(): void;

	didReceiveTextMessage(message: string): void;

	generateRequestID(): number;

	generateRequestNumber(): number;

	initWithNamespace(protocolNamespace: string): this;

	sendTextMessageError(message: string, error: interop.Pointer | interop.Reference<GCKError>): boolean;
}

declare class GCKCastContext extends NSObject {

	static alloc(): GCKCastContext; // inherited from NSObject

	static isSharedInstanceInitialized(): boolean;

	static new(): GCKCastContext; // inherited from NSObject

	static setSharedInstanceWithOptions(options: GCKCastOptions): void;

	static setSharedInstanceWithOptionsError(options: GCKCastOptions, error: interop.Pointer | interop.Reference<GCKError>): boolean;

	static sharedInstance(): GCKCastContext;

	readonly castState: GCKCastState;

	readonly defaultExpandedMediaControlsViewController: GCKUIExpandedMediaControlsViewController;

	readonly discoveryManager: GCKDiscoveryManager;

	imageCache: GCKUIImageCache;

	imagePicker: GCKUIImagePicker;

	readonly sessionManager: GCKSessionManager;

	useDefaultExpandedMediaControls: boolean;

	clearCastInstructionsShownFlag(): void;

	createCastContainerControllerForViewController(viewController: UIViewController): GCKUICastContainerViewController;

	createMiniMediaControlsViewController(): GCKUIMiniMediaControlsViewController;

	presentCastDialog(): void;

	presentCastInstructionsViewControllerOnce(): boolean;

	presentCastInstructionsViewControllerOnceWithCastButton(castButton: GCKUICastButton): boolean;

	presentDefaultExpandedMediaControls(): void;

	registerDeviceProvider(deviceProvider: GCKDeviceProvider): void;

	unregisterDeviceProviderForCategory(category: string): void;
}

interface GCKCastDeviceStatusListener extends NSObjectProtocol {

	castSessionDidAddMultizoneDevice?(castSession: GCKCastSession, device: GCKMultizoneDevice): void;

	castSessionDidReceiveActiveInputStatus?(castSession: GCKCastSession, activeInputStatus: GCKActiveInputStatus): void;

	castSessionDidReceiveMultizoneStatus?(castSession: GCKCastSession, multizoneStatus: GCKMultizoneStatus): void;

	castSessionDidReceiveStandbyStatus?(castSession: GCKCastSession, standbyStatus: GCKStandbyStatus): void;

	castSessionDidRemoveMultizoneDeviceWithID?(castSession: GCKCastSession, deviceID: string): void;

	castSessionDidUpdateMultizoneDevice?(castSession: GCKCastSession, device: GCKMultizoneDevice): void;
}
declare var GCKCastDeviceStatusListener: {

	prototype: GCKCastDeviceStatusListener;
};

declare class GCKCastOptions extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKCastOptions; // inherited from NSObject

	static new(): GCKCastOptions; // inherited from NSObject

	disableAnalyticsLogging: boolean;

	disableDiscoveryAutostart: boolean;

	launchOptions: GCKLaunchOptions;

	physicalVolumeButtonsWillControlDeviceVolume: boolean;

	sharedContainerIdentifier: string;

	stopReceiverApplicationWhenEndingSession: boolean;

	suspendSessionsWhenBackgrounded: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { discoveryCriteria: GCKDiscoveryCriteria; });

	constructor(o: { receiverApplicationID: string; });

	constructor(o: { supportedNamespaces: NSArray<string> | string[]; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithDiscoveryCriteria(discoveryCriteria: GCKDiscoveryCriteria): this;

	initWithReceiverApplicationID(applicationID: string): this;

	initWithSupportedNamespaces(namespaces: NSArray<string> | string[]): this;
}

declare class GCKCastSession extends GCKSession {

	static alloc(): GCKCastSession; // inherited from NSObject

	static new(): GCKCastSession; // inherited from NSObject

	readonly activeInputStatus: GCKActiveInputStatus;

	readonly applicationMetadata: GCKApplicationMetadata;

	readonly standbyStatus: GCKStandbyStatus;

	constructor(o: { device: GCKDevice; sessionID: string; sessionOptions: NSDictionary<string, NSObject>; castOptions: GCKCastOptions; });

	addChannel(channel: GCKCastChannel): boolean;

	addDeviceStatusListener(listener: GCKCastDeviceStatusListener): void;

	initWithDeviceSessionIDSessionOptionsCastOptions(device: GCKDevice, sessionID: string, sessionOptions: NSDictionary<string, NSObject>, castOptions: GCKCastOptions): this;

	removeChannel(channel: GCKCastChannel): boolean;

	removeDeviceStatusListener(listener: GCKCastDeviceStatusListener): void;

	requestMultizoneStatus(): GCKRequest;

	setDeviceMutedForMultizoneDevice(muted: boolean, device: GCKMultizoneDevice): GCKRequest;

	setDeviceVolumeForMultizoneDevice(volume: number, device: GCKMultizoneDevice): GCKRequest;
}

declare const enum GCKCastState {

	NoDevicesAvailable = 0,

	NotConnected = 1,

	Connecting = 2,

	Connected = 3
}

declare class GCKColor extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKColor; // inherited from NSObject

	static black(): GCKColor;

	static blue(): GCKColor;

	static cyan(): GCKColor;

	static green(): GCKColor;

	static magenta(): GCKColor;

	static new(): GCKColor; // inherited from NSObject

	static red(): GCKColor;

	static white(): GCKColor;

	static yellow(): GCKColor;

	readonly alpha: number;

	readonly blue: number;

	readonly green: number;

	readonly red: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { CGColor: any; });

	constructor(o: { CGColor: any; alpha: number; });

	constructor(o: { CSSString: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { red: number; green: number; blue: number; });

	constructor(o: { red: number; green: number; blue: number; alpha: number; });

	constructor(o: { UIColor: UIColor; });

	CSSString(): string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCGColor(color: any): this;

	initWithCGColorAlpha(color: any, alpha: number): this;

	initWithCSSString(CSSString: string): this;

	initWithCoder(coder: NSCoder): this;

	initWithRedGreenBlue(red: number, green: number, blue: number): this;

	initWithRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): this;

	initWithUIColor(color: UIColor): this;
}

declare const enum GCKConnectionState {

	Disconnected = 0,

	Connecting = 1,

	Connected = 2,

	Disconnecting = 3
}

declare const enum GCKConnectionSuspendReason {

	Unknown = -1,

	None = 0,

	AppBackgrounded = 1,

	NetworkError = 2,

	NetworkNotReachable = 3,

	AppTerminated = 4
}

declare class GCKDevice extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKDevice; // inherited from NSObject

	static deviceCategoryForDeviceUniqueID(deviceUniqueID: string): string;

	static new(): GCKDevice; // inherited from NSObject

	readonly category: string;

	readonly deviceID: string;

	deviceVersion: string;

	friendlyName: string;

	icons: NSArray<GCKImage>;

	readonly ipAddress: string;

	readonly isOnLocalNetwork: boolean;

	modelName: string;

	readonly networkAddress: GCKNetworkAddress;

	readonly servicePort: number;

	status: GCKDeviceStatus;

	statusText: string;

	readonly type: GCKDeviceType;

	readonly uniqueID: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	attributeForKey(key: string): NSObject;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	hasCapabilities(deviceCapabilities: GCKDeviceCapabilities): boolean;

	initWithCoder(coder: NSCoder): this;

	isSameDeviceAs(other: GCKDevice): boolean;

	removeAllAttributes(): void;

	removeAttributeForKey(key: string): void;

	setAttributeForKey(attribute: NSObject, key: string): void;
}

declare const enum GCKDeviceCapabilities {

	CapabilityVideoOut = 1,

	CapabilityVideoIn = 2,

	CapabilityAudioOut = 4,

	CapabilityAudioIn = 8,

	CapabilityMultizoneGroup = 32,

	CapabilityDynamicGroup = 64,

	CapabilityMasterOrFixedVolume = 2048,

	CapabilityAttenuationOrFixedVolume = 4096,

	CapabilityDynamicGroupingSupported = 65536
}

declare class GCKDeviceProvider extends NSObject {

	static alloc(): GCKDeviceProvider; // inherited from NSObject

	static new(): GCKDeviceProvider; // inherited from NSObject

	readonly deviceCategory: string;

	readonly devices: NSArray<GCKDevice>;

	passiveScan: boolean;

	constructor(o: { deviceCategory: string; });

	createDeviceWithIDIpAddressServicePort(deviceID: string, ipAddress: string, servicePort: number): GCKDevice;

	createDeviceWithIDNetworkAddressServicePort(deviceID: string, networkAddress: GCKNetworkAddress, servicePort: number): GCKDevice;

	createSessionForDeviceSessionID(device: GCKDevice, sessionID: string): GCKSession;

	createSessionForDeviceSessionIDSessionOptions(device: GCKDevice, sessionID: string, sessionOptions: NSDictionary<string, NSObject>): GCKSession;

	initWithDeviceCategory(deviceCategory: string): this;

	notifyDidPublishDevice(device: GCKDevice): void;

	notifyDidStartDiscovery(): void;

	notifyDidUnpublishDevice(device: GCKDevice): void;

	notifyDidUpdateDevice(device: GCKDevice): void;

	startDiscovery(): void;

	stopDiscovery(): void;
}

declare const enum GCKDeviceStatus {

	Unknown = -1,

	Idle = 0,

	Busy = 1
}

declare const enum GCKDeviceType {

	Generic = 0,

	TV = 1,

	Speaker = 2,

	SpeakerGroup = 3,

	NearbyUnpaired = 4
}

declare class GCKDiscoveryCriteria extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKDiscoveryCriteria; // inherited from NSObject

	static new(): GCKDiscoveryCriteria; // inherited from NSObject

	readonly allSubtypes: NSSet<string>;

	readonly applicationIDs: NSOrderedSet<string>;

	readonly hasApplicationIDs: boolean;

	readonly hasNamespaces: boolean;

	readonly namespaces: NSSet<string>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { applicationID: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { namespaces: NSSet<string>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithApplicationID(applicationID: string): this;

	initWithCoder(coder: NSCoder): this;

	initWithNamespaces(namespaces: NSSet<string>): this;
}

declare class GCKDiscoveryManager extends NSObject {

	static alloc(): GCKDiscoveryManager; // inherited from NSObject

	static new(): GCKDiscoveryManager; // inherited from NSObject

	readonly deviceCount: number;

	readonly discoveryActive: boolean;

	readonly discoveryState: GCKDiscoveryState;

	readonly hasDiscoveredDevices: boolean;

	passiveScan: boolean;

	addListener(listener: GCKDiscoveryManagerListener): void;

	cancelFindOperation(): void;

	deviceAtIndex(index: number): GCKDevice;

	deviceWithUniqueID(uniqueID: string): GCKDevice;

	findDeviceWithUniqueIDTimeoutCompletion(uniqueID: string, timeout: number, completion: (p1: GCKDevice) => void): void;

	isDiscoveryActiveForDeviceCategory(deviceCategory: string): boolean;

	removeListener(listener: GCKDiscoveryManagerListener): void;

	startDiscovery(): void;

	stopDiscovery(): void;
}

interface GCKDiscoveryManagerListener extends NSObjectProtocol {

	didHaveDiscoveredDeviceWhenStartingDiscovery?(): void;

	didInsertDeviceAtIndex?(device: GCKDevice, index: number): void;

	didRemoveDeviceAtIndex?(index: number): void;

	didRemoveDeviceAtIndex?(device: GCKDevice, index: number): void;

	didStartDiscoveryForDeviceCategory?(deviceCategory: string): void;

	didUpdateDeviceAtIndex?(device: GCKDevice, index: number): void;

	didUpdateDeviceAtIndexAndMoveToIndex?(device: GCKDevice, index: number, newIndex: number): void;

	didUpdateDeviceList?(): void;

	willUpdateDeviceList?(): void;
}
declare var GCKDiscoveryManagerListener: {

	prototype: GCKDiscoveryManagerListener;
};

declare const enum GCKDiscoveryState {

	Stopped = 0,

	Running = 1
}

declare class GCKDynamicDevice extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKDynamicDevice; // inherited from NSObject

	static new(): GCKDynamicDevice; // inherited from NSObject

	readonly capabilities: GCKDeviceCapabilities;

	readonly deviceID: string;

	readonly friendlyName: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	hasCapabilities(deviceCapabilities: GCKDeviceCapabilities): boolean;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKError extends NSError {

	static alloc(): GCKError; // inherited from NSObject

	static enumDescriptionForCode(code: GCKErrorCode): string;

	static errorWithCode(code: GCKErrorCode): GCKError;

	static errorWithCodeCustomData(code: GCKErrorCode, customData: any): GCKError;

	static errorWithDomainCodeUserInfo(domain: string, code: number, dict: NSDictionary<string, any>): GCKError; // inherited from NSError

	static fileProviderErrorForCollisionWithItem(existingItem: NSFileProviderItem): GCKError; // inherited from NSError

	static fileProviderErrorForNonExistentItemWithIdentifier(itemIdentifier: string): GCKError; // inherited from NSError

	static new(): GCKError; // inherited from NSObject
}

declare const enum GCKErrorCode {

	NoError = 0,

	NetworkError = 1,

	Timeout = 2,

	DeviceAuthenticationFailure = 3,

	InvalidRequest = 4,

	Cancelled = 5,

	Replaced = 6,

	NotAllowed = 7,

	DuplicateRequest = 8,

	InvalidState = 9,

	SendBufferFull = 10,

	MessageTooBig = 11,

	ChannelNotConnected = 12,

	DeviceAuthorizationFailure = 13,

	DeviceNotConnected = 14,

	ProtocolVersionMismatch = 15,

	MaxUsersConnected = 16,

	NetworkNotReachable = 17,

	ProtocolError = 18,

	AlreadyInitialized = 19,

	ApplicationNotFound = 20,

	ApplicationNotRunning = 21,

	InvalidApplicationSessionID = 22,

	SecureTransportError = 23,

	SocketAlreadyConnected = 24,

	SocketInvalidAddress = 25,

	SocketInvalidParameter = 26,

	InvalidResponse = 27,

	FailedSessionUpdate = 28,

	SessionIsNotActive = 29,

	MediaLoadFailed = 30,

	InvalidMediaPlayerState = 31,

	NoMediaSession = 32,

	NotCastSession = 33,

	MediaError = 34,

	AuthenticationErrorReceived = 40,

	MalformedClientCertificate = 41,

	NotX509Certificate = 42,

	DeviceCertificateNotTrusted = 43,

	SSLCertificateNotTrusted = 44,

	MalformedAuthenticationResponse = 45,

	DeviceCapabilityNotSupported = 46,

	CRLInvalid = 47,

	CRLCheckFailed = 48,

	BroadcastMessageEncryptionFailed = 50,

	BroadcastKeyExchangeInvalidResponse = 51,

	BroadcastKeyExchangeInvalidInput = 52,

	BroadcastKeyExchangeEmptyResponse = 53,

	BroadcastKeyExchangeRequestTimeout = 54,

	BroadcastKeyExchangeFailedToFindDevice = 55,

	BroadcastKeyExchangeFailedToConnect = 56,

	BroadcastMessageDropped = 57,

	BroadcastSocketError = 58,

	BroadcastFailedToGenerateEncryptionKey = 59,

	GuestModeListenFailed = 60,

	RemoteDisplayError = 80,

	RemoteDisplayDeviceNotSupported = 81,

	RemoteDisplayFeatureNotSupported = 82,

	RemoteDisplayConfigurationRejectedByReceiver = 83,

	RemoteDisplayOpenGLError = 84,

	RemoteDisplayMetalError = 85,

	RemoteDisplayAudioConversionError = 86,

	AppDidEnterBackground = 91,

	Disconnected = 92,

	UnsupportedFeature = 93,

	Unknown = 99,

	DeviceAuthenticationMessageParseFailure = 100,

	DeviceAuthenticationMessageChallengeReceivedFailure = 101,

	DeviceAuthenticationTimeoutFailure = 102
}

declare class GCKGenericChannel extends GCKCastChannel {

	static alloc(): GCKGenericChannel; // inherited from NSObject

	static new(): GCKGenericChannel; // inherited from NSObject

	delegate: GCKGenericChannelDelegate;
}

interface GCKGenericChannelDelegate extends NSObjectProtocol {

	castChannelDidChangeWritableState?(channel: GCKCastChannel, writable: boolean): void;

	castChannelDidConnect?(channel: GCKGenericChannel): void;

	castChannelDidDisconnect?(channel: GCKGenericChannel): void;

	castChannelDidReceiveTextMessageWithNamespace(channel: GCKGenericChannel, message: string, protocolNamespace: string): void;
}
declare var GCKGenericChannelDelegate: {

	prototype: GCKGenericChannelDelegate;
};

declare const enum GCKHLSSegmentFormat {

	Undefined = 0,

	AAC = 1,

	AC3 = 2,

	MP3 = 3,

	TS = 4,

	TS_AAC = 5
}

declare class GCKImage extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKImage; // inherited from NSObject

	static new(): GCKImage; // inherited from NSObject

	readonly URL: NSURL;

	readonly height: number;

	readonly width: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { URL: NSURL; width: number; height: number; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithURLWidthHeight(URL: NSURL, width: number, height: number): this;
}

declare function GCKIsValidTimeInterval(timeInterval: number): boolean;

declare class GCKJSONUtils extends NSObject {

	static alloc(): GCKJSONUtils; // inherited from NSObject

	static isJSONObjectEquivalentTo(actual: any, expected: any): boolean;

	static isJSONStringEquivalentTo(actual: string, expected: string): boolean;

	static new(): GCKJSONUtils; // inherited from NSObject

	static parseJSON(json: string): any;

	static parseJSONError(json: string): any;

	static writeJSON(object: any): string;
}

declare class GCKLaunchOptions extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKLaunchOptions; // inherited from NSObject

	static new(): GCKLaunchOptions; // inherited from NSObject

	androidReceiverCompatible: boolean;

	languageCode: string;

	relaunchIfRunning: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { languageCode: string; relaunchIfRunning: boolean; });

	constructor(o: { relaunchIfRunning: boolean; });

	constructor(o: { relaunchIfRunning: boolean; androidReceiverCompatible: boolean; });

	constructor(o: { relaunchIfRunning: boolean; languageCode: string; androidReceiverCompatible: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithLanguageCodeRelaunchIfRunning(languageCode: string, relaunchIfRunning: boolean): this;

	initWithRelaunchIfRunning(relaunchIfRunning: boolean): this;

	initWithRelaunchIfRunningAndroidReceiverCompatible(relaunchIfRunning: boolean, androidReceiverCompatible: boolean): this;

	initWithRelaunchIfRunningLanguageCodeAndroidReceiverCompatible(relaunchIfRunning: boolean, languageCode: string, androidReceiverCompatible: boolean): this;
}

declare class GCKLogger extends NSObject {

	static alloc(): GCKLogger; // inherited from NSObject

	static new(): GCKLogger; // inherited from NSObject

	static sharedInstance(): GCKLogger;

	consoleLoggingEnabled: boolean;

	delegate: GCKLoggerDelegate;

	fileLoggingEnabled: boolean;

	filter: GCKLoggerFilter;

	loggingEnabled: boolean;

	maxLogFileCount: number;

	maxLogFileSize: number;

	minimumLevel: GCKLoggerLevel;
}

interface GCKLoggerDelegate extends NSObjectProtocol {

	logMessageAtLevelFromFunctionLocation?(message: string, level: GCKLoggerLevel, _function: string, location: string): void;

	logMessageFromFunction?(message: string, _function: string): void;
}
declare var GCKLoggerDelegate: {

	prototype: GCKLoggerDelegate;
};

declare class GCKLoggerFilter extends NSObject {

	static alloc(): GCKLoggerFilter; // inherited from NSObject

	static new(): GCKLoggerFilter; // inherited from NSObject

	exclusive: boolean;

	minimumLevel: GCKLoggerLevel;

	addClassNames(classNames: NSArray<string> | string[]): void;

	addClassNamesMinimumLogLevel(classNames: NSArray<string> | string[], minimumLogLevel: GCKLoggerLevel): void;

	addFunctionNames(functionNames: NSArray<string> | string[]): void;

	addFunctionNamesMinimumLogLevel(functionNames: NSArray<string> | string[], minimumLogLevel: GCKLoggerLevel): void;

	addMessagePatterns(messagePatterns: NSArray<string> | string[]): void;

	addMessagePatternsCaseInsensitive(messagePatterns: NSArray<string> | string[], caseInsensitive: boolean): void;

	reset(): void;

	setLoggingLevelForClasses(minimumLevel: GCKLoggerLevel, classNames: NSArray<string> | string[]): void;

	setLoggingLevelForFunctions(minimumLevel: GCKLoggerLevel, functionNames: NSArray<string> | string[]): void;
}

declare const enum GCKLoggerLevel {

	None = 0,

	Verbose = 1,

	Debug = 2,

	Info = 3,

	Warning = 4,

	Error = 5,

	Assert = 6
}

declare class GCKMediaInformation extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaInformation; // inherited from NSObject

	static new(): GCKMediaInformation; // inherited from NSObject

	readonly VMAP: GCKVASTAdsRequest;

	readonly adBreakClips: NSArray<GCKAdBreakClipInfo>;

	readonly adBreaks: NSArray<GCKAdBreakInfo>;

	readonly contentID: string;

	readonly contentType: string;

	readonly contentURL: NSURL;

	readonly customData: any;

	readonly entity: string;

	readonly mediaTracks: NSArray<GCKMediaTrack>;

	readonly metadata: GCKMediaMetadata;

	readonly startAbsoluteTime: number;

	readonly streamDuration: number;

	readonly streamType: GCKMediaStreamType;

	readonly textTrackStyle: GCKMediaTextTrackStyle;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { contentID: string; streamType: GCKMediaStreamType; contentType: string; metadata: GCKMediaMetadata; adBreaks: NSArray<GCKAdBreakInfo> | GCKAdBreakInfo[]; adBreakClips: NSArray<GCKAdBreakClipInfo> | GCKAdBreakClipInfo[]; streamDuration: number; mediaTracks: NSArray<GCKMediaTrack> | GCKMediaTrack[]; textTrackStyle: GCKMediaTextTrackStyle; customData: any; });

	constructor(o: { contentID: string; streamType: GCKMediaStreamType; contentType: string; metadata: GCKMediaMetadata; streamDuration: number; mediaTracks: NSArray<GCKMediaTrack> | GCKMediaTrack[]; textTrackStyle: GCKMediaTextTrackStyle; customData: any; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithContentIDStreamTypeContentTypeMetadataAdBreaksAdBreakClipsStreamDurationMediaTracksTextTrackStyleCustomData(contentID: string, streamType: GCKMediaStreamType, contentType: string, metadata: GCKMediaMetadata, adBreaks: NSArray<GCKAdBreakInfo> | GCKAdBreakInfo[], adBreakClips: NSArray<GCKAdBreakClipInfo> | GCKAdBreakClipInfo[], streamDuration: number, mediaTracks: NSArray<GCKMediaTrack> | GCKMediaTrack[], textTrackStyle: GCKMediaTextTrackStyle, customData: any): this;

	initWithContentIDStreamTypeContentTypeMetadataStreamDurationMediaTracksTextTrackStyleCustomData(contentID: string, streamType: GCKMediaStreamType, contentType: string, metadata: GCKMediaMetadata, streamDuration: number, mediaTracks: NSArray<GCKMediaTrack> | GCKMediaTrack[], textTrackStyle: GCKMediaTextTrackStyle, customData: any): this;

	mediaTrackWithID(trackID: number): GCKMediaTrack;
}

declare class GCKMediaInformationBuilder extends NSObject {

	static alloc(): GCKMediaInformationBuilder; // inherited from NSObject

	static new(): GCKMediaInformationBuilder; // inherited from NSObject

	VMAP: GCKVASTAdsRequest;

	adBreakClips: NSArray<GCKAdBreakClipInfo>;

	adBreaks: NSArray<GCKAdBreakInfo>;

	contentID: string;

	contentType: string;

	contentURL: NSURL;

	customData: any;

	entity: string;

	mediaTracks: NSArray<GCKMediaTrack>;

	metadata: GCKMediaMetadata;

	startAbsoluteTime: number;

	streamDuration: number;

	streamType: GCKMediaStreamType;

	textTrackStyle: GCKMediaTextTrackStyle;

	constructor(o: { contentID: string; });

	constructor(o: { contentID: string; entity: string; });

	constructor(o: { contentURL: NSURL; });

	constructor(o: { entity: string; });

	constructor(o: { mediaInformation: GCKMediaInformation; });

	build(): GCKMediaInformation;

	initWithContentID(contentID: string): this;

	initWithContentIDEntity(contentID: string, entity: string): this;

	initWithContentURL(contentURL: NSURL): this;

	initWithEntity(entity: string): this;

	initWithMediaInformation(mediaInfo: GCKMediaInformation): this;
}

declare class GCKMediaLiveSeekableRange extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaLiveSeekableRange; // inherited from NSObject

	static new(): GCKMediaLiveSeekableRange; // inherited from NSObject

	readonly endTime: number;

	readonly isLiveDone: boolean;

	readonly isMovingWindow: boolean;

	readonly startTime: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKMediaLoadOptions extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaLoadOptions; // inherited from NSObject

	static new(): GCKMediaLoadOptions; // inherited from NSObject

	activeTrackIDs: NSArray<number>;

	autoplay: boolean;

	credentials: string;

	credentialsType: string;

	customData: any;

	playPosition: number;

	playbackRate: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKMediaLoadRequestData extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaLoadRequestData; // inherited from NSObject

	static new(): GCKMediaLoadRequestData; // inherited from NSObject

	readonly activeTrackIDs: NSArray<number>;

	readonly autoplay: number;

	readonly credentials: string;

	readonly credentialsType: string;

	readonly customData: any;

	readonly mediaInformation: GCKMediaInformation;

	readonly playbackRate: number;

	readonly queueData: GCKMediaQueueData;

	readonly startTime: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKMediaLoadRequestDataBuilder extends NSObject {

	static alloc(): GCKMediaLoadRequestDataBuilder; // inherited from NSObject

	static new(): GCKMediaLoadRequestDataBuilder; // inherited from NSObject

	activeTrackIDs: NSArray<number>;

	autoplay: number;

	credentials: string;

	credentialsType: string;

	customData: any;

	mediaInformation: GCKMediaInformation;

	playbackRate: number;

	queueData: GCKMediaQueueData;

	startTime: number;

	constructor(o: { mediaLoadRequestData: GCKMediaLoadRequestData; });

	build(): GCKMediaLoadRequestData;

	initWithMediaLoadRequestData(requestData: GCKMediaLoadRequestData): this;
}

declare class GCKMediaMetadata extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaMetadata; // inherited from NSObject

	static new(): GCKMediaMetadata; // inherited from NSObject

	readonly metadataType: GCKMediaMetadataType;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { metadataType: GCKMediaMetadataType; });

	addImage(image: GCKImage): void;

	allKeys(): NSArray<string>;

	containsKey(key: string): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	dateAsStringForKey(key: string): string;

	dateForKey(key: string): Date;

	doubleForKey(key: string): number;

	doubleForKeyDefaultValue(key: string, defaultValue: number): number;

	encodeWithCoder(coder: NSCoder): void;

	images(): NSArray<any>;

	initWithCoder(coder: NSCoder): this;

	initWithMetadataType(metadataType: GCKMediaMetadataType): this;

	integerForKey(key: string): number;

	integerForKeyDefaultValue(key: string, defaultValue: number): number;

	objectForKey(key: string): any;

	removeAllMediaImages(): void;

	setDateForKey(date: Date, key: string): void;

	setDoubleForKey(value: number, key: string): void;

	setIntegerForKey(value: number, key: string): void;

	setStringForKey(value: string, key: string): void;

	stringForKey(key: string): string;
}

declare const enum GCKMediaMetadataImageType {

	Custom = 0,

	CastDialog = 1,

	MiniController = 2,

	Background = 3
}

declare const enum GCKMediaMetadataType {

	Generic = 0,

	Movie = 1,

	TVShow = 2,

	MusicTrack = 3,

	Photo = 4,

	AudioBookChapter = 5,

	User = 100
}

declare const enum GCKMediaPlayerIdleReason {

	None = 0,

	Finished = 1,

	Cancelled = 2,

	Interrupted = 3,

	Error = 4
}

declare const enum GCKMediaPlayerState {

	Unknown = 0,

	Idle = 1,

	Playing = 2,

	Paused = 3,

	Buffering = 4,

	Loading = 5
}

declare class GCKMediaQueue extends NSObject {

	static alloc(): GCKMediaQueue; // inherited from NSObject

	static new(): GCKMediaQueue; // inherited from NSObject

	readonly cacheSize: number;

	readonly cachedItemCount: number;

	readonly itemCount: number;

	constructor(o: { remoteMediaClient: GCKRemoteMediaClient; });

	constructor(o: { remoteMediaClient: GCKRemoteMediaClient; cacheSize: number; });

	constructor(o: { remoteMediaClient: GCKRemoteMediaClient; cacheSize: number; maxFetchCount: number; });

	addDelegate(delegate: GCKMediaQueueDelegate): void;

	clear(): void;

	indexOfItemWithID(itemID: number): number;

	initWithRemoteMediaClient(remoteMediaClient: GCKRemoteMediaClient): this;

	initWithRemoteMediaClientCacheSize(remoteMediaClient: GCKRemoteMediaClient, cacheSize: number): this;

	initWithRemoteMediaClientCacheSizeMaxFetchCount(remoteMediaClient: GCKRemoteMediaClient, cacheSize: number, maxFetchCount: number): this;

	itemAtIndex(index: number): GCKMediaQueueItem;

	itemAtIndexFetchIfNeeded(index: number, fetch: boolean): GCKMediaQueueItem;

	itemIDAtIndex(index: number): number;

	reload(): void;

	removeDelegate(delegate: GCKMediaQueueDelegate): void;
}

declare class GCKMediaQueueContainerMetadata extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaQueueContainerMetadata; // inherited from NSObject

	static new(): GCKMediaQueueContainerMetadata; // inherited from NSObject

	readonly authors: NSArray<string>;

	readonly containerDuration: number;

	readonly containerImages: NSArray<GCKImage>;

	readonly containerType: GCKMediaQueueContainerType;

	readonly narrators: NSArray<string>;

	readonly publisher: string;

	readonly releaseDate: string;

	readonly sections: NSArray<GCKMediaMetadata>;

	readonly title: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKMediaQueueContainerMetadataBuilder extends NSObject {

	static alloc(): GCKMediaQueueContainerMetadataBuilder; // inherited from NSObject

	static new(): GCKMediaQueueContainerMetadataBuilder; // inherited from NSObject

	authors: NSArray<string>;

	containerDuration: number;

	containerImages: NSArray<GCKImage>;

	containerType: GCKMediaQueueContainerType;

	narrators: NSArray<string>;

	publisher: string;

	releaseDate: string;

	sections: NSArray<GCKMediaMetadata>;

	title: string;

	constructor(o: { containerMetadata: GCKMediaQueueContainerMetadata; });

	constructor(o: { containerType: GCKMediaQueueContainerType; });

	build(): GCKMediaQueueContainerMetadata;

	initWithContainerMetadata(containerMetadata: GCKMediaQueueContainerMetadata): this;

	initWithContainerType(containerType: GCKMediaQueueContainerType): this;
}

declare const enum GCKMediaQueueContainerType {

	Generic = 0,

	AudioBook = 1
}

declare class GCKMediaQueueData extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaQueueData; // inherited from NSObject

	static new(): GCKMediaQueueData; // inherited from NSObject

	readonly containerMetadata: GCKMediaQueueContainerMetadata;

	readonly entity: string;

	readonly items: NSArray<GCKMediaQueueItem>;

	readonly name: string;

	readonly queueID: string;

	readonly queueType: GCKMediaQueueType;

	readonly repeatMode: GCKMediaRepeatMode;

	readonly startIndex: number;

	readonly startTime: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKMediaQueueDataBuilder extends NSObject {

	static alloc(): GCKMediaQueueDataBuilder; // inherited from NSObject

	static new(): GCKMediaQueueDataBuilder; // inherited from NSObject

	containerMetadata: GCKMediaQueueContainerMetadata;

	entity: string;

	items: NSArray<GCKMediaQueueItem>;

	name: string;

	queueID: string;

	queueType: GCKMediaQueueType;

	repeatMode: GCKMediaRepeatMode;

	startIndex: number;

	startTime: number;

	constructor(o: { queueData: GCKMediaQueueData; });

	constructor(o: { queueType: GCKMediaQueueType; });

	build(): GCKMediaQueueData;

	initWithQueueData(queueData: GCKMediaQueueData): this;

	initWithQueueType(queueType: GCKMediaQueueType): this;
}

interface GCKMediaQueueDelegate extends NSObjectProtocol {

	mediaQueueDidChange?(queue: GCKMediaQueue): void;

	mediaQueueDidInsertItemsInRange?(queue: GCKMediaQueue, range: NSRange): void;

	mediaQueueDidReloadItems?(queue: GCKMediaQueue): void;

	mediaQueueDidRemoveItemsAtIndexes?(queue: GCKMediaQueue, indexes: NSArray<number> | number[]): void;

	mediaQueueDidUpdateItemsAtIndexes?(queue: GCKMediaQueue, indexes: NSArray<number> | number[]): void;

	mediaQueueWillChange?(queue: GCKMediaQueue): void;
}
declare var GCKMediaQueueDelegate: {

	prototype: GCKMediaQueueDelegate;
};

declare class GCKMediaQueueItem extends NSObject implements NSCopying {

	static alloc(): GCKMediaQueueItem; // inherited from NSObject

	static new(): GCKMediaQueueItem; // inherited from NSObject

	readonly activeTrackIDs: NSArray<number>;

	readonly autoplay: boolean;

	readonly customData: any;

	readonly itemID: number;

	readonly mediaInformation: GCKMediaInformation;

	readonly playbackDuration: number;

	readonly preloadTime: number;

	readonly startTime: number;

	constructor(o: { mediaInformation: GCKMediaInformation; autoplay: boolean; startTime: number; playbackDuration: number; preloadTime: number; activeTrackIDs: NSArray<number> | number[]; customData: any; });

	constructor(o: { mediaInformation: GCKMediaInformation; autoplay: boolean; startTime: number; preloadTime: number; activeTrackIDs: NSArray<number> | number[]; customData: any; });

	clearItemID(): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithMediaInformationAutoplayStartTimePlaybackDurationPreloadTimeActiveTrackIDsCustomData(mediaInformation: GCKMediaInformation, autoplay: boolean, startTime: number, playbackDuration: number, preloadTime: number, activeTrackIDs: NSArray<number> | number[], customData: any): this;

	initWithMediaInformationAutoplayStartTimePreloadTimeActiveTrackIDsCustomData(mediaInformation: GCKMediaInformation, autoplay: boolean, startTime: number, preloadTime: number, activeTrackIDs: NSArray<number> | number[], customData: any): this;

	mediaQueueItemModifiedWithBlock(block: (p1: GCKMediaQueueItemBuilder) => void): this;
}

declare class GCKMediaQueueItemBuilder extends NSObject {

	static alloc(): GCKMediaQueueItemBuilder; // inherited from NSObject

	static new(): GCKMediaQueueItemBuilder; // inherited from NSObject

	activeTrackIDs: NSArray<number>;

	autoplay: boolean;

	customData: any;

	mediaInformation: GCKMediaInformation;

	playbackDuration: number;

	preloadTime: number;

	startTime: number;

	constructor(o: { mediaQueueItem: GCKMediaQueueItem; });

	build(): GCKMediaQueueItem;

	initWithMediaQueueItem(item: GCKMediaQueueItem): this;
}

declare class GCKMediaQueueLoadOptions extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaQueueLoadOptions; // inherited from NSObject

	static new(): GCKMediaQueueLoadOptions; // inherited from NSObject

	customData: any;

	playPosition: number;

	repeatMode: GCKMediaRepeatMode;

	startIndex: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare const enum GCKMediaQueueType {

	Generic = 0,

	Album = 1,

	Playlist = 2,

	AudioBook = 3,

	RadioStation = 4,

	PodcastSeries = 5,

	TVSeries = 6,

	VideoPlayList = 7,

	LiveTV = 8,

	Movie = 9
}

declare const enum GCKMediaRepeatMode {

	Unchanged = 0,

	Off = 1,

	Single = 2,

	All = 3,

	AllAndShuffle = 4
}

declare class GCKMediaRequestItem extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaRequestItem; // inherited from NSObject

	static mapHLSSegmentFormatStringToEnum(hlsSegmentFormatString: string): GCKHLSSegmentFormat;

	static mapHLSSegmentFormatToString(hlsSegmentFormat: GCKHLSSegmentFormat): string;

	static new(): GCKMediaRequestItem; // inherited from NSObject

	hlsSegmentFormat: GCKHLSSegmentFormat;

	initialTime: number;

	mediaURL: NSURL;

	protocolType: GCKStreamingProtocolType;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { URL: NSURL; protocolType: GCKStreamingProtocolType; });

	constructor(o: { URL: NSURL; protocolType: GCKStreamingProtocolType; initialTime: number; hlsSegmentFormat: GCKHLSSegmentFormat; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithURLProtocolType(url: NSURL, protocolType: GCKStreamingProtocolType): this;

	initWithURLProtocolTypeInitialTimeHlsSegmentFormat(url: NSURL, protocolType: GCKStreamingProtocolType, initialTime: number, hlsSegmentFormat: GCKHLSSegmentFormat): this;
}

declare const enum GCKMediaResumeState {

	Unchanged = 0,

	Play = 1,

	Pause = 2
}

declare class GCKMediaSeekOptions extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaSeekOptions; // inherited from NSObject

	static new(): GCKMediaSeekOptions; // inherited from NSObject

	customData: any;

	interval: number;

	relative: boolean;

	resumeState: GCKMediaResumeState;

	seekToInfinite: boolean;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKMediaStatus extends NSObject implements NSCopying {

	static alloc(): GCKMediaStatus; // inherited from NSObject

	static new(): GCKMediaStatus; // inherited from NSObject

	readonly activeTrackIDs: NSArray<number>;

	readonly adBreakStatus: GCKAdBreakStatus;

	readonly currentItemID: number;

	readonly currentQueueItem: GCKMediaQueueItem;

	readonly customData: any;

	readonly idleReason: GCKMediaPlayerIdleReason;

	readonly isMuted: boolean;

	readonly liveSeekableRange: GCKMediaLiveSeekableRange;

	readonly loadingItemID: number;

	readonly mediaInformation: GCKMediaInformation;

	readonly mediaSessionID: number;

	readonly nextQueueItem: GCKMediaQueueItem;

	readonly playbackRate: number;

	readonly playerState: GCKMediaPlayerState;

	readonly playingAd: boolean;

	readonly preloadedItemID: number;

	readonly queueData: GCKMediaQueueData;

	readonly queueHasCurrentItem: boolean;

	readonly queueHasLoadingItem: boolean;

	readonly queueHasNextItem: boolean;

	readonly queueHasPreviousItem: boolean;

	readonly queueItemCount: number;

	readonly queueRepeatMode: GCKMediaRepeatMode;

	readonly streamPosition: number;

	readonly videoInfo: GCKVideoInfo;

	readonly volume: number;

	constructor(o: { sessionID: number; mediaInformation: GCKMediaInformation; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithSessionIDMediaInformation(mediaSessionID: number, mediaInformation: GCKMediaInformation): this;

	isMediaCommandSupported(command: number): boolean;

	queueIndexForItemID(itemID: number): number;

	queueItemAtIndex(index: number): GCKMediaQueueItem;

	queueItemWithItemID(itemID: number): GCKMediaQueueItem;
}

declare const enum GCKMediaStreamType {

	None = 0,

	Buffered = 1,

	Live = 2,

	Unknown = 99
}

declare class GCKMediaTextTrackStyle extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaTextTrackStyle; // inherited from NSObject

	static createDefault(): GCKMediaTextTrackStyle;

	static new(): GCKMediaTextTrackStyle; // inherited from NSObject

	backgroundColor: GCKColor;

	customData: any;

	edgeColor: GCKColor;

	edgeType: GCKMediaTextTrackStyleEdgeType;

	fontFamily: string;

	fontGenericFamily: GCKMediaTextTrackStyleFontGenericFamily;

	fontScale: number;

	fontStyle: GCKMediaTextTrackStyleFontStyle;

	foregroundColor: GCKColor;

	windowColor: GCKColor;

	windowRoundedCornerRadius: number;

	windowType: GCKMediaTextTrackStyleWindowType;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare const enum GCKMediaTextTrackStyleEdgeType {

	Unknown = -1,

	None = 0,

	Outline = 1,

	DropShadow = 2,

	Raised = 3,

	Depressed = 4
}

declare const enum GCKMediaTextTrackStyleFontGenericFamily {

	Unknown = -1,

	None = 0,

	SansSerif = 1,

	MonospacedSansSerif = 2,

	Serif = 3,

	MonospacedSerif = 4,

	Casual = 5,

	Cursive = 6,

	SmallCapitals = 7
}

declare const enum GCKMediaTextTrackStyleFontStyle {

	Unknown = -1,

	Normal = 0,

	Bold = 1,

	Italic = 2,

	BoldItalic = 3
}

declare const enum GCKMediaTextTrackStyleWindowType {

	Unknown = -1,

	None = 0,

	Normal = 1,

	RoundedCorners = 2
}

declare const enum GCKMediaTextTrackSubtype {

	Unknown = 0,

	Subtitles = 1,

	Captions = 3,

	Descriptions = 4,

	Chapters = 5,

	Metadata = 6
}

declare class GCKMediaTrack extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMediaTrack; // inherited from NSObject

	static new(): GCKMediaTrack; // inherited from NSObject

	readonly contentIdentifier: string;

	readonly contentType: string;

	readonly customData: any;

	readonly identifier: number;

	readonly languageCode: string;

	readonly name: string;

	readonly textSubtype: GCKMediaTextTrackSubtype;

	readonly type: GCKMediaTrackType;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { identifier: number; contentIdentifier: string; contentType: string; type: GCKMediaTrackType; textSubtype: GCKMediaTextTrackSubtype; name: string; languageCode: string; customData: any; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithIdentifierContentIdentifierContentTypeTypeTextSubtypeNameLanguageCodeCustomData(identifier: number, contentIdentifier: string, contentType: string, type: GCKMediaTrackType, textSubtype: GCKMediaTextTrackSubtype, name: string, languageCode: string, customData: any): this;
}

declare const enum GCKMediaTrackType {

	Unknown = 0,

	Text = 1,

	Audio = 2,

	Video = 3
}

declare class GCKMultizoneDevice extends GCKDynamicDevice implements NSCopying, NSSecureCoding {

	static alloc(): GCKMultizoneDevice; // inherited from NSObject

	static new(): GCKMultizoneDevice; // inherited from NSObject

	readonly muted: boolean;

	readonly volumeLevel: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKMultizoneStatus extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKMultizoneStatus; // inherited from NSObject

	static new(): GCKMultizoneStatus; // inherited from NSObject

	readonly devices: NSArray<GCKMultizoneDevice>;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { devices: NSArray<GCKMultizoneDevice> | GCKMultizoneDevice[]; });

	constructor(o: { JSONObject: any; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithDevices(devices: NSArray<GCKMultizoneDevice> | GCKMultizoneDevice[]): this;

	initWithJSONObject(JSONObject: any): this;
}

declare class GCKNetworkAddress extends NSObject implements NSCoding, NSCopying {

	static IPv4BroadcastAddress(): GCKNetworkAddress;

	static addressWithIPCPath(path: string): GCKNetworkAddress;

	static addressWithIPv4Address(ipAddress: string): GCKNetworkAddress;

	static addressWithIPv6Address(ipAddress: string): GCKNetworkAddress;

	static alloc(): GCKNetworkAddress; // inherited from NSObject

	static loopbackAddressOfType(type: GCKNetworkAddressType): GCKNetworkAddress;

	static new(): GCKNetworkAddress; // inherited from NSObject

	static wildcardAddressOfType(type: GCKNetworkAddressType): GCKNetworkAddress;

	readonly addressData: NSData;

	readonly ipAddress: string;

	readonly type: GCKNetworkAddressType;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { type: GCKNetworkAddressType; addressData: NSData; });

	constructor(o: { type: GCKNetworkAddressType; ipAddress: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithTypeAddressData(type: GCKNetworkAddressType, addressData: NSData): this;

	initWithTypeIpAddress(type: GCKNetworkAddressType, ipAddress: string): this;
}

declare const enum GCKNetworkAddressType {

	Unknown = 0,

	IPv4 = 1,

	IPv6 = 2,

	IPC = 3
}

declare class GCKOpenURLOptions extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKOpenURLOptions; // inherited from NSObject

	static new(): GCKOpenURLOptions; // inherited from NSObject

	static openURLOptionsFromURL(url: NSURL): GCKOpenURLOptions;

	deviceFriendlyName: string;

	deviceUniqueID: string;

	sessionID: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	asURLQueryItem(): NSURLQueryItem;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKRemoteMediaClient extends NSObject {

	static alloc(): GCKRemoteMediaClient; // inherited from NSObject

	static new(): GCKRemoteMediaClient; // inherited from NSObject

	adInfoParserDelegate: GCKRemoteMediaClientAdInfoParserDelegate;

	readonly connected: boolean;

	readonly mediaQueue: GCKMediaQueue;

	readonly mediaStatus: GCKMediaStatus;

	readonly playingLiveStream: boolean;

	readonly timeSinceLastMediaStatusUpdate: number;

	addListener(listener: GCKRemoteMediaClientListener): void;

	approximateLiveSeekableRangeEnd(): number;

	approximateLiveSeekableRangeStart(): number;

	approximateStreamPosition(): number;

	loadMedia(mediaInfo: GCKMediaInformation): GCKRequest;

	loadMediaAutoplay(mediaInfo: GCKMediaInformation, autoplay: boolean): GCKRequest;

	loadMediaAutoplayPlayPosition(mediaInfo: GCKMediaInformation, autoplay: boolean, playPosition: number): GCKRequest;

	loadMediaAutoplayPlayPositionActiveTrackIDs(mediaInfo: GCKMediaInformation, autoplay: boolean, playPosition: number, activeTrackIDs: NSArray<number> | number[]): GCKRequest;

	loadMediaAutoplayPlayPositionActiveTrackIDsCustomData(mediaInfo: GCKMediaInformation, autoplay: boolean, playPosition: number, activeTrackIDs: NSArray<number> | number[], customData: any): GCKRequest;

	loadMediaAutoplayPlayPositionCustomData(mediaInfo: GCKMediaInformation, autoplay: boolean, playPosition: number, customData: any): GCKRequest;

	loadMediaWithLoadRequestData(requestData: GCKMediaLoadRequestData): GCKRequest;

	loadMediaWithOptions(mediaInfo: GCKMediaInformation, options: GCKMediaLoadOptions): GCKRequest;

	notifyDidInsertQueueItemsWithIDsBeforeItemWithID(itemIDs: NSArray<number> | number[], beforeItemID: number): void;

	notifyDidReceiveQueueItemIDs(itemIDs: NSArray<number> | number[]): void;

	notifyDidReceiveQueueItems(items: NSArray<GCKMediaQueueItem> | GCKMediaQueueItem[]): void;

	notifyDidRemoveQueueItemsWithIDs(itemIDs: NSArray<number> | number[]): void;

	notifyDidStartMediaSession(): void;

	notifyDidUpdateMediaStatus(): void;

	notifyDidUpdateMetadata(): void;

	notifyDidUpdatePreloadStatus(): void;

	notifyDidUpdateQueue(): void;

	notifyDidUpdateQueueItemsWithIDs(itemIDs: NSArray<number> | number[]): void;

	pause(): GCKRequest;

	pauseWithCustomData(customData: any): GCKRequest;

	play(): GCKRequest;

	playWithCustomData(customData: any): GCKRequest;

	queueFetchItemIDs(): GCKRequest;

	queueFetchItemsForIDs(queueItemIDs: NSArray<number> | number[]): GCKRequest;

	queueInsertAndPlayItemBeforeItemWithID(item: GCKMediaQueueItem, beforeItemID: number): GCKRequest;

	queueInsertAndPlayItemBeforeItemWithIDPlayPositionCustomData(item: GCKMediaQueueItem, beforeItemID: number, playPosition: number, customData: any): GCKRequest;

	queueInsertItemBeforeItemWithID(item: GCKMediaQueueItem, beforeItemID: number): GCKRequest;

	queueInsertItemsBeforeItemWithID(queueItems: NSArray<GCKMediaQueueItem> | GCKMediaQueueItem[], beforeItemID: number): GCKRequest;

	queueInsertItemsBeforeItemWithIDCustomData(queueItems: NSArray<GCKMediaQueueItem> | GCKMediaQueueItem[], beforeItemID: number, customData: any): GCKRequest;

	queueJumpToItemWithID(itemID: number): GCKRequest;

	queueJumpToItemWithIDCustomData(itemID: number, customData: any): GCKRequest;

	queueJumpToItemWithIDPlayPositionCustomData(itemID: number, playPosition: number, customData: any): GCKRequest;

	queueLoadItemsStartIndexPlayPositionRepeatModeCustomData(queueItems: NSArray<GCKMediaQueueItem> | GCKMediaQueueItem[], startIndex: number, playPosition: number, repeatMode: GCKMediaRepeatMode, customData: any): GCKRequest;

	queueLoadItemsStartIndexRepeatMode(queueItems: NSArray<GCKMediaQueueItem> | GCKMediaQueueItem[], startIndex: number, repeatMode: GCKMediaRepeatMode): GCKRequest;

	queueLoadItemsStartIndexRepeatModeCustomData(queueItems: NSArray<GCKMediaQueueItem> | GCKMediaQueueItem[], startIndex: number, repeatMode: GCKMediaRepeatMode, customData: any): GCKRequest;

	queueLoadItemsWithOptions(queueItems: NSArray<GCKMediaQueueItem> | GCKMediaQueueItem[], options: GCKMediaQueueLoadOptions): GCKRequest;

	queueMoveItemWithIDBeforeItemWithID(itemID: number, beforeItemID: number): GCKRequest;

	queueNextItem(): GCKRequest;

	queuePreviousItem(): GCKRequest;

	queueRemoveItemWithID(itemID: number): GCKRequest;

	queueRemoveItemsWithIDs(itemIDs: NSArray<number> | number[]): GCKRequest;

	queueRemoveItemsWithIDsCustomData(itemIDs: NSArray<number> | number[], customData: any): GCKRequest;

	queueReorderItemsWithIDsInsertBeforeItemWithID(queueItemIDs: NSArray<number> | number[], beforeItemID: number): GCKRequest;

	queueReorderItemsWithIDsInsertBeforeItemWithIDCustomData(queueItemIDs: NSArray<number> | number[], beforeItemID: number, customData: any): GCKRequest;

	queueSetRepeatMode(repeatMode: GCKMediaRepeatMode): GCKRequest;

	queueUpdateItems(queueItems: NSArray<GCKMediaQueueItem> | GCKMediaQueueItem[]): GCKRequest;

	queueUpdateItemsCustomData(queueItems: NSArray<GCKMediaQueueItem> | GCKMediaQueueItem[], customData: any): GCKRequest;

	removeListener(listener: GCKRemoteMediaClientListener): void;

	requestStatus(): GCKRequest;

	seekToTimeInterval(position: number): GCKRequest;

	seekToTimeIntervalResumeState(position: number, resumeState: GCKMediaResumeState): GCKRequest;

	seekToTimeIntervalResumeStateCustomData(position: number, resumeState: GCKMediaResumeState, customData: any): GCKRequest;

	seekWithOptions(options: GCKMediaSeekOptions): GCKRequest;

	setActiveTrackIDs(activeTrackIDs: NSArray<number> | number[]): GCKRequest;

	setPlaybackRate(playbackRate: number): GCKRequest;

	setPlaybackRateCustomData(playbackRate: number, customData: any): GCKRequest;

	setStreamMuted(muted: boolean): GCKRequest;

	setStreamMutedCustomData(muted: boolean, customData: any): GCKRequest;

	setStreamVolume(volume: number): GCKRequest;

	setStreamVolumeCustomData(volume: number, customData: any): GCKRequest;

	setTextTrackStyle(textTrackStyle: GCKMediaTextTrackStyle): GCKRequest;

	skipAd(): GCKRequest;

	stop(): GCKRequest;

	stopWithCustomData(customData: any): GCKRequest;
}

interface GCKRemoteMediaClientAdInfoParserDelegate extends NSObjectProtocol {

	remoteMediaClientShouldSetAdBreaksInMediaStatus?(client: GCKRemoteMediaClient, mediaStatus: GCKMediaStatus): NSArray<GCKAdBreakInfo>;

	remoteMediaClientShouldSetPlayingAdInMediaStatus?(client: GCKRemoteMediaClient, mediaStatus: GCKMediaStatus): boolean;
}
declare var GCKRemoteMediaClientAdInfoParserDelegate: {

	prototype: GCKRemoteMediaClientAdInfoParserDelegate;
};

interface GCKRemoteMediaClientListener extends NSObjectProtocol {

	remoteMediaClientDidInsertQueueItemsWithIDsBeforeItemWithID?(client: GCKRemoteMediaClient, queueItemIDs: NSArray<number> | number[], beforeItemID: number): void;

	remoteMediaClientDidReceiveQueueItemIDs?(client: GCKRemoteMediaClient, queueItemIDs: NSArray<number> | number[]): void;

	remoteMediaClientDidReceiveQueueItems?(client: GCKRemoteMediaClient, queueItems: NSArray<GCKMediaQueueItem> | GCKMediaQueueItem[]): void;

	remoteMediaClientDidRemoveQueueItemsWithIDs?(client: GCKRemoteMediaClient, queueItemIDs: NSArray<number> | number[]): void;

	remoteMediaClientDidStartMediaSessionWithID?(client: GCKRemoteMediaClient, sessionID: number): void;

	remoteMediaClientDidUpdateMediaMetadata?(client: GCKRemoteMediaClient, mediaMetadata: GCKMediaMetadata): void;

	remoteMediaClientDidUpdateMediaStatus?(client: GCKRemoteMediaClient, mediaStatus: GCKMediaStatus): void;

	remoteMediaClientDidUpdatePreloadStatus?(client: GCKRemoteMediaClient): void;

	remoteMediaClientDidUpdateQueue?(client: GCKRemoteMediaClient): void;

	remoteMediaClientDidUpdateQueueItemsWithIDs?(client: GCKRemoteMediaClient, queueItemIDs: NSArray<number> | number[]): void;
}
declare var GCKRemoteMediaClientListener: {

	prototype: GCKRemoteMediaClientListener;
};

declare class GCKRequest extends NSObject {

	static alloc(): GCKRequest; // inherited from NSObject

	static applicationRequest(): GCKRequest;

	static new(): GCKRequest; // inherited from NSObject

	delegate: GCKRequestDelegate;

	readonly error: GCKError;

	readonly external: boolean;

	readonly inProgress: boolean;

	readonly requestID: number;

	abortWithReason(reason: GCKRequestAbortReason): void;

	cancel(): void;

	complete(): void;

	failWithError(error: GCKError): void;
}

declare const enum GCKRequestAbortReason {

	Replaced = 1,

	Cancelled = 2
}

interface GCKRequestDelegate extends NSObjectProtocol {

	requestDidAbortWithReason?(request: GCKRequest, abortReason: GCKRequestAbortReason): void;

	requestDidComplete?(request: GCKRequest): void;

	requestDidFailWithError?(request: GCKRequest, error: GCKError): void;
}
declare var GCKRequestDelegate: {

	prototype: GCKRequestDelegate;
};

declare class GCKSenderApplicationInfo extends NSObject implements NSCopying {

	static alloc(): GCKSenderApplicationInfo; // inherited from NSObject

	static new(): GCKSenderApplicationInfo; // inherited from NSObject

	readonly appIdentifier: string;

	readonly launchURL: NSURL;

	readonly platform: GCKSenderApplicationInfoPlatform;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum GCKSenderApplicationInfoPlatform {

	Android = 1,

	iOS = 2,

	Chrome = 3,

	OSX = 4
}

declare class GCKSession extends NSObject {

	static alloc(): GCKSession; // inherited from NSObject

	static new(): GCKSession; // inherited from NSObject

	readonly connectionState: GCKConnectionState;

	readonly currentDeviceMuted: boolean;

	readonly currentDeviceVolume: number;

	readonly device: GCKDevice;

	readonly deviceStatusText: string;

	readonly mediaMetadata: GCKMediaMetadata;

	readonly remoteMediaClient: GCKRemoteMediaClient;

	readonly sessionID: string;

	readonly sessionOptions: NSDictionary<string, NSObject>;

	readonly suspended: boolean;

	readonly traits: GCKSessionTraits;

	constructor(o: { device: GCKDevice; traits: GCKSessionTraits; sessionID: string; });

	constructor(o: { device: GCKDevice; traits: GCKSessionTraits; sessionID: string; sessionOptions: NSDictionary<string, NSObject>; });

	endWithAction(action: GCKSessionEndAction): void;

	initWithDeviceTraitsSessionID(device: GCKDevice, traits: GCKSessionTraits, sessionID: string): this;

	initWithDeviceTraitsSessionIDSessionOptions(device: GCKDevice, traits: GCKSessionTraits, sessionID: string, sessionOptions: NSDictionary<string, NSObject>): this;

	notifyDidEndWithErrorWillTryToResume(error: NSError, willTryToResume: boolean): void;

	notifyDidFailToStartWithError(error: NSError): void;

	notifyDidReceiveDeviceStatus(statusText: string): void;

	notifyDidReceiveDeviceVolumeMuted(volume: number, muted: boolean): void;

	notifyDidResume(): void;

	notifyDidStartWithSessionID(sessionID: string): void;

	notifyDidSuspendWithReason(reason: GCKConnectionSuspendReason): void;

	setDeviceMuted(muted: boolean): GCKRequest;

	setDeviceVolume(volume: number): GCKRequest;

	start(): void;
}

declare const enum GCKSessionEndAction {

	Leave = 1,

	Disconnect = 2,

	StopCasting = 3
}

declare class GCKSessionManager extends NSObject {

	static alloc(): GCKSessionManager; // inherited from NSObject

	static new(): GCKSessionManager; // inherited from NSObject

	readonly connectionState: GCKConnectionState;

	readonly currentCastSession: GCKCastSession;

	readonly currentSession: GCKSession;

	addListener(listener: GCKSessionManagerListener): void;

	defaultSessionOptionsForDeviceCategory(category: string): NSDictionary<string, NSObject>;

	endSession(): boolean;

	endSessionAndStopCasting(stopCasting: boolean): boolean;

	hasConnectedCastSession(): boolean;

	hasConnectedSession(): boolean;

	removeListener(listener: GCKSessionManagerListener): void;

	setDefaultSessionOptionsForDeviceCategory(sessionOptions: NSDictionary<string, NSObject>, category: string): void;

	startSessionWithDevice(device: GCKDevice): boolean;

	startSessionWithDeviceSessionOptions(device: GCKDevice, options: NSDictionary<string, NSObject>): boolean;

	startSessionWithOpenURLOptionsSessionOptions(openURLOptions: GCKOpenURLOptions, sessionOptions: NSDictionary<string, NSObject>): boolean;

	suspendSessionWithReason(reason: GCKConnectionSuspendReason): boolean;
}

interface GCKSessionManagerListener extends NSObjectProtocol {

	sessionManagerCastSessionDidReceiveDeviceStatus?(sessionManager: GCKSessionManager, session: GCKCastSession, statusText: string): void;

	sessionManagerCastSessionDidReceiveDeviceVolumeMuted?(sessionManager: GCKSessionManager, session: GCKCastSession, volume: number, muted: boolean): void;

	sessionManagerDidEndCastSessionWithError?(sessionManager: GCKSessionManager, session: GCKCastSession, error: NSError): void;

	sessionManagerDidEndSessionWithError?(sessionManager: GCKSessionManager, session: GCKSession, error: NSError): void;

	sessionManagerDidFailToStartCastSessionWithError?(sessionManager: GCKSessionManager, session: GCKCastSession, error: NSError): void;

	sessionManagerDidFailToStartSessionWithError?(sessionManager: GCKSessionManager, session: GCKSession, error: NSError): void;

	sessionManagerDidResumeCastSession?(sessionManager: GCKSessionManager, session: GCKCastSession): void;

	sessionManagerDidResumeSession?(sessionManager: GCKSessionManager, session: GCKSession): void;

	sessionManagerDidStartCastSession?(sessionManager: GCKSessionManager, session: GCKCastSession): void;

	sessionManagerDidStartSession?(sessionManager: GCKSessionManager, session: GCKSession): void;

	sessionManagerDidSuspendCastSessionWithReason?(sessionManager: GCKSessionManager, session: GCKCastSession, reason: GCKConnectionSuspendReason): void;

	sessionManagerDidSuspendSessionWithReason?(sessionManager: GCKSessionManager, session: GCKSession, reason: GCKConnectionSuspendReason): void;

	sessionManagerDidUpdateDefaultSessionOptionsForDeviceCategory?(sessionManager: GCKSessionManager, category: string): void;

	sessionManagerSessionDidReceiveDeviceStatus?(sessionManager: GCKSessionManager, session: GCKSession, statusText: string): void;

	sessionManagerSessionDidReceiveDeviceVolumeMuted?(sessionManager: GCKSessionManager, session: GCKSession, volume: number, muted: boolean): void;

	sessionManagerSessionDidUpdateDevice?(sessionManager: GCKSessionManager, session: GCKSession, device: GCKDevice): void;

	sessionManagerWillEndCastSession?(sessionManager: GCKSessionManager, session: GCKCastSession): void;

	sessionManagerWillEndSession?(sessionManager: GCKSessionManager, session: GCKSession): void;

	sessionManagerWillResumeCastSession?(sessionManager: GCKSessionManager, session: GCKCastSession): void;

	sessionManagerWillResumeSession?(sessionManager: GCKSessionManager, session: GCKSession): void;

	sessionManagerWillStartCastSession?(sessionManager: GCKSessionManager, session: GCKCastSession): void;

	sessionManagerWillStartSession?(sessionManager: GCKSessionManager, session: GCKSession): void;
}
declare var GCKSessionManagerListener: {

	prototype: GCKSessionManagerListener;
};

declare class GCKSessionTraits extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKSessionTraits; // inherited from NSObject

	static new(): GCKSessionTraits; // inherited from NSObject

	readonly maximumVolume: number;

	readonly minimumVolume: number;

	readonly supportsMuting: boolean;

	readonly volumeIncrement: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { minimumVolume: number; maximumVolume: number; volumeIncrement: number; supportsMuting: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithMinimumVolumeMaximumVolumeVolumeIncrementSupportsMuting(minimumVolume: number, maximumVolume: number, volumeIncrement: number, supportsMuting: boolean): this;

	isFixedVolume(): boolean;
}

declare const enum GCKStandbyStatus {

	Unknown = -1,

	Inactive = 0,

	Active = 1
}

declare const enum GCKStreamingProtocolType {

	Unknown = 0,

	MPEGDASH = 1,

	HLS = 2,

	SmoothStreaming = 3
}

declare class GCKUIButton extends GCKUIMultistateButton {

	static alloc(): GCKUIButton; // inherited from NSObject

	static appearance(): GCKUIButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GCKUIButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GCKUIButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GCKUIButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GCKUIButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GCKUIButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): GCKUIButton; // inherited from UIButton

	static new(): GCKUIButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): GCKUIButton; // inherited from UIButton

	applicationState: UIControlState;
}

declare var GCKUIButtonStateMuteOff: number;

declare var GCKUIButtonStateMuteOn: number;

declare var GCKUIButtonStatePause: number;

declare var GCKUIButtonStatePlay: number;

declare var GCKUIButtonStatePlayLive: number;

declare var GCKUIButtonStateRepeatAll: number;

declare var GCKUIButtonStateRepeatOff: number;

declare var GCKUIButtonStateRepeatSingle: number;

declare var GCKUIButtonStateShuffle: number;

declare class GCKUICastButton extends UIButton {

	static alloc(): GCKUICastButton; // inherited from NSObject

	static appearance(): GCKUICastButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GCKUICastButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GCKUICastButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GCKUICastButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GCKUICastButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GCKUICastButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): GCKUICastButton; // inherited from UIButton

	static new(): GCKUICastButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): GCKUICastButton; // inherited from UIButton

	triggersDefaultCastDialog: boolean;

	setAccessibilityLabelForCastState(label: string, state: GCKCastState): void;

	setInactiveIconActiveIconAnimationIcons(inactiveIcon: UIImage, activeIcon: UIImage, animationIcons: NSArray<UIImage> | UIImage[]): void;
}

declare class GCKUICastContainerViewController extends UIViewController {

	static alloc(): GCKUICastContainerViewController; // inherited from NSObject

	static new(): GCKUICastContainerViewController; // inherited from NSObject

	readonly contentViewController: UIViewController;

	miniMediaControlsItemEnabled: boolean;

	readonly miniMediaControlsViewController: GCKUIMiniMediaControlsViewController;
}

declare var GCKUIControlStateMuteOff: UIControlState;

declare var GCKUIControlStateMuteOn: UIControlState;

declare var GCKUIControlStatePause: UIControlState;

declare var GCKUIControlStatePlay: UIControlState;

declare var GCKUIControlStateRepeatAll: UIControlState;

declare var GCKUIControlStateRepeatOff: UIControlState;

declare var GCKUIControlStateRepeatSingle: UIControlState;

declare var GCKUIControlStateShuffle: UIControlState;

declare class GCKUIDeviceVolumeController extends NSObject {

	static alloc(): GCKUIDeviceVolumeController; // inherited from NSObject

	static new(): GCKUIDeviceVolumeController; // inherited from NSObject

	muteSwitch: UISwitch;

	muteToggleButton: GCKUIMultistateButton;

	volumeDownButton: UIButton;

	volumeSlider: UISlider;

	volumeUpButton: UIButton;

	setMuted(muted: boolean): void;

	setVolume(volume: number): void;

	toggleMuted(): void;

	volumeDown(): void;

	volumeUp(): void;
}

declare class GCKUIExpandedMediaControlsViewController extends UIViewController implements GCKUIMediaButtonBarProtocol {

	static alloc(): GCKUIExpandedMediaControlsViewController; // inherited from NSObject

	static new(): GCKUIExpandedMediaControlsViewController; // inherited from NSObject

	hideStreamPositionControlsForLiveContent: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	buttonCount(): number;

	buttonTypeAtIndex(index: number): GCKUIMediaButtonType;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	customButtonAtIndex(index: number): UIButton;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setButtonTypeAtIndex(buttonType: GCKUIMediaButtonType, index: number): void;

	setCustomButtonAtIndex(customButton: UIButton, index: number): void;
}

interface GCKUIImageCache extends NSObjectProtocol {

	fetchImageForURLCompletion(imageURL: NSURL, completion: (p1: UIImage) => void): void;
}
declare var GCKUIImageCache: {

	prototype: GCKUIImageCache;
};

declare class GCKUIImageHints extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKUIImageHints; // inherited from NSObject

	static new(): GCKUIImageHints; // inherited from NSObject

	readonly customData: NSObject;

	readonly imageSize: CGSize;

	readonly imageType: GCKMediaMetadataImageType;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { imageType: GCKMediaMetadataImageType; imageSize: CGSize; });

	constructor(o: { imageType: GCKMediaMetadataImageType; imageSize: CGSize; customData: NSObject; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithImageTypeImageSize(imageType: GCKMediaMetadataImageType, imageSize: CGSize): this;

	initWithImageTypeImageSizeCustomData(imageType: GCKMediaMetadataImageType, imageSize: CGSize, customData: NSObject): this;
}

interface GCKUIImagePicker extends NSObjectProtocol {

	getImageWithHintsFromMetadata(imageHints: GCKUIImageHints, metadata: GCKMediaMetadata): GCKImage;
}
declare var GCKUIImagePicker: {

	prototype: GCKUIImagePicker;
};

interface GCKUIMediaButtonBarProtocol extends NSObjectProtocol {

	buttonCount(): number;

	buttonTypeAtIndex(index: number): GCKUIMediaButtonType;

	customButtonAtIndex(index: number): UIButton;

	setButtonTypeAtIndex(buttonType: GCKUIMediaButtonType, index: number): void;

	setCustomButtonAtIndex(customButton: UIButton, index: number): void;
}
declare var GCKUIMediaButtonBarProtocol: {

	prototype: GCKUIMediaButtonBarProtocol;
};

declare const enum GCKUIMediaButtonType {

	None = 0,

	PlayPauseToggle = 1,

	SkipNext = 2,

	SkipPrevious = 3,

	Rewind30Seconds = 4,

	Forward30Seconds = 5,

	MuteToggle = 6,

	ClosedCaptions = 7,

	Stop = 8,

	Custom = 9
}

declare class GCKUIMediaController extends NSObject {

	static alloc(): GCKUIMediaController; // inherited from NSObject

	static new(): GCKUIMediaController; // inherited from NSObject

	delegate: GCKUIMediaControllerDelegate;

	displayTimeRemainingAsNegativeValue: boolean;

	forward30SecondsButton: UIButton;

	readonly hasCurrentQueueItem: boolean;

	readonly hasLoadingQueueItem: boolean;

	hideStreamPositionControlsForLiveContent: boolean;

	readonly lastKnownPlayerState: GCKMediaPlayerState;

	readonly lastKnownStreamPosition: number;

	readonly mediaLoaded: boolean;

	mediaLoadingIndicator: UIActivityIndicatorView;

	nextButton: UIButton;

	pauseButton: UIButton;

	pauseQueueButton: UIButton;

	playButton: UIButton;

	playPauseToggleButton: GCKUIMultistateButton;

	playPauseToggleController: GCKUIPlayPauseToggleController;

	playbackRateController: GCKUIPlaybackRateController;

	previousButton: UIButton;

	repeatModeButton: GCKUIMultistateButton;

	rewind30SecondsButton: UIButton;

	readonly session: GCKSession;

	skipAdButton: UIButton;

	skipAdLabel: UILabel;

	smartSubtitleLabel: UILabel;

	stopButton: UIButton;

	streamDurationLabel: UILabel;

	streamPositionController: GCKUIStreamPositionController;

	streamPositionLabel: UILabel;

	streamPositionSlider: UISlider;

	streamProgressView: UIProgressView;

	streamTimeRemainingLabel: UILabel;

	tracksButton: UIButton;

	bindImageViewToImageHints(imageView: UIImageView, imageHints: GCKUIImageHints): void;

	bindLabelToMetadataKey(label: UILabel, key: string): void;

	bindLabelToMetadataKeyWithFormatter(label: UILabel, key: string, formatter: (p1: any) => string): void;

	bindTextViewToMetadataKey(textView: UITextView, key: string): void;

	bindTextViewToMetadataKeyWithFormatter(textView: UITextView, key: string, formatter: (p1: any) => string): void;

	cycleRepeatMode(): GCKMediaRepeatMode;

	selectTracks(): void;

	skipAd(): void;

	unbindAllViews(): void;

	unbindView(view: UIView): void;
}

interface GCKUIMediaControllerDelegate extends NSObjectProtocol {

	mediaControllerDidBeginPreloadForItemID?(mediaController: GCKUIMediaController, itemID: number): void;

	mediaControllerDidUpdateMediaStatus?(mediaController: GCKUIMediaController, mediaStatus: GCKMediaStatus): void;

	mediaControllerDidUpdatePlayerStateLastStreamPosition?(mediaController: GCKUIMediaController, playerState: GCKMediaPlayerState, streamPosition: number): void;
}
declare var GCKUIMediaControllerDelegate: {

	prototype: GCKUIMediaControllerDelegate;
};

declare class GCKUIMediaTrackSelectionViewController extends UITabBarController {

	static alloc(): GCKUIMediaTrackSelectionViewController; // inherited from NSObject

	static new(): GCKUIMediaTrackSelectionViewController; // inherited from NSObject

	mediaInfo: GCKMediaInformation;

	selectedTrackIDs: NSArray<number>;

	selectionDelegate: GCKUIMediaTrackSelectionViewControllerDelegate;
}

interface GCKUIMediaTrackSelectionViewControllerDelegate extends NSObjectProtocol {

	didSelectMediaTracks(mediaTrackIDs: NSArray<number> | number[]): void;
}
declare var GCKUIMediaTrackSelectionViewControllerDelegate: {

	prototype: GCKUIMediaTrackSelectionViewControllerDelegate;
};

declare class GCKUIMiniMediaControlsViewController extends UIViewController implements GCKUIMediaButtonBarProtocol {

	static alloc(): GCKUIMiniMediaControlsViewController; // inherited from NSObject

	static new(): GCKUIMiniMediaControlsViewController; // inherited from NSObject

	readonly active: boolean;

	delegate: GCKUIMiniMediaControlsViewControllerDelegate;

	readonly minHeight: number;

	thumbnailEnabled: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	buttonCount(): number;

	buttonTypeAtIndex(index: number): GCKUIMediaButtonType;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	customButtonAtIndex(index: number): UIButton;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setButtonTypeAtIndex(buttonType: GCKUIMediaButtonType, index: number): void;

	setCustomButtonAtIndex(customButton: UIButton, index: number): void;
}

interface GCKUIMiniMediaControlsViewControllerDelegate extends NSObjectProtocol {

	miniMediaControlsViewControllerShouldAppear(miniMediaControlsViewController: GCKUIMiniMediaControlsViewController, shouldAppear: boolean): void;
}
declare var GCKUIMiniMediaControlsViewControllerDelegate: {

	prototype: GCKUIMiniMediaControlsViewControllerDelegate;
};

declare class GCKUIMultistateButton extends UIButton {

	static alloc(): GCKUIMultistateButton; // inherited from NSObject

	static appearance(): GCKUIMultistateButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): GCKUIMultistateButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): GCKUIMultistateButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GCKUIMultistateButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): GCKUIMultistateButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): GCKUIMultistateButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): GCKUIMultistateButton; // inherited from UIButton

	static new(): GCKUIMultistateButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): GCKUIMultistateButton; // inherited from UIButton

	buttonState: number;

	setImageForButtonState(image: UIImage, buttonState: number): void;
}

declare const enum GCKUIPlayPauseState {

	None = 0,

	Play = 1,

	Pause = 2
}

declare class GCKUIPlayPauseToggleController extends NSObject {

	static alloc(): GCKUIPlayPauseToggleController; // inherited from NSObject

	static new(): GCKUIPlayPauseToggleController; // inherited from NSObject

	inputEnabled: boolean;

	playPauseState: GCKUIPlayPauseState;
}

declare class GCKUIPlaybackRateController extends NSObject {

	static alloc(): GCKUIPlaybackRateController; // inherited from NSObject

	static new(): GCKUIPlaybackRateController; // inherited from NSObject

	inputEnabled: boolean;

	playbackRate: number;
}

declare class GCKUIStreamPositionController extends NSObject {

	static alloc(): GCKUIStreamPositionController; // inherited from NSObject

	static new(): GCKUIStreamPositionController; // inherited from NSObject

	inputEnabled: boolean;

	streamDuration: number;

	streamPosition: number;
}

declare class GCKUIStyle extends NSObject {

	static alloc(): GCKUIStyle; // inherited from NSObject

	static new(): GCKUIStyle; // inherited from NSObject

	static sharedInstance(): GCKUIStyle;

	readonly castViews: GCKUIStyleAttributesCastViews;

	applyStyle(): void;
}

declare class GCKUIStyleAttributes extends NSObject {

	static alloc(): GCKUIStyleAttributes; // inherited from NSObject

	static new(): GCKUIStyleAttributes; // inherited from NSObject

	adImageContentMode: number;

	audioTrackImage: UIImage;

	backgroundColor: UIColor;

	backgroundImageContentMode: number;

	bodyTextColor: UIColor;

	bodyTextFont: UIFont;

	bodyTextShadowColor: UIColor;

	bodyTextShadowOffset: CGSize;

	buttonTextColor: UIColor;

	buttonTextFont: UIFont;

	buttonTextShadowColor: UIColor;

	buttonTextShadowOffset: CGSize;

	captionTextColor: UIColor;

	captionTextFont: UIFont;

	captionTextShadowColor: UIColor;

	captionTextShadowOffset: CGSize;

	closedCaptionsImage: UIImage;

	forward30SecondsImage: UIImage;

	headingTextColor: UIColor;

	headingTextFont: UIFont;

	headingTextShadowColor: UIColor;

	headingTextShadowOffset: CGSize;

	iconTintColor: UIColor;

	liveIndicatorColor: UIColor;

	muteOffImage: UIImage;

	muteOnImage: UIImage;

	pauseImage: UIImage;

	playImage: UIImage;

	rewind30SecondsImage: UIImage;

	skipNextImage: UIImage;

	skipPreviousImage: UIImage;

	sliderProgressColor: UIColor;

	sliderSecondaryProgressColor: UIColor;

	sliderTooltipBackgroundColor: UIColor;

	sliderUnseekableProgressColor: UIColor;

	stopImage: UIImage;

	subtitlesTrackImage: UIImage;

	volumeImage: UIImage;
}

declare class GCKUIStyleAttributesCastViews extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesCastViews; // inherited from NSObject

	static new(): GCKUIStyleAttributesCastViews; // inherited from NSObject

	readonly deviceControl: GCKUIStyleAttributesDeviceControl;

	readonly instructions: GCKUIStyleAttributesInstructions;

	readonly mediaControl: GCKUIStyleAttributesMediaControl;
}

declare class GCKUIStyleAttributesConnectionController extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesConnectionController; // inherited from NSObject

	static new(): GCKUIStyleAttributesConnectionController; // inherited from NSObject

	readonly navigation: GCKUIStyleAttributesConnectionNavigation;

	readonly toolbar: GCKUIStyleAttributesConnectionToolbar;
}

declare class GCKUIStyleAttributesConnectionNavigation extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesConnectionNavigation; // inherited from NSObject

	static new(): GCKUIStyleAttributesConnectionNavigation; // inherited from NSObject
}

declare class GCKUIStyleAttributesConnectionToolbar extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesConnectionToolbar; // inherited from NSObject

	static new(): GCKUIStyleAttributesConnectionToolbar; // inherited from NSObject
}

declare class GCKUIStyleAttributesDeviceChooser extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesDeviceChooser; // inherited from NSObject

	static new(): GCKUIStyleAttributesDeviceChooser; // inherited from NSObject
}

declare class GCKUIStyleAttributesDeviceControl extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesDeviceControl; // inherited from NSObject

	static new(): GCKUIStyleAttributesDeviceControl; // inherited from NSObject

	readonly connectionController: GCKUIStyleAttributesConnectionController;

	readonly deviceChooser: GCKUIStyleAttributesDeviceChooser;

	readonly guestModePairingDialog: GCKUIStyleAttributesGuestModePairingDialog;
}

declare class GCKUIStyleAttributesExpandedController extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesExpandedController; // inherited from NSObject

	static new(): GCKUIStyleAttributesExpandedController; // inherited from NSObject
}

declare class GCKUIStyleAttributesGuestModePairingDialog extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesGuestModePairingDialog; // inherited from NSObject

	static new(): GCKUIStyleAttributesGuestModePairingDialog; // inherited from NSObject
}

declare class GCKUIStyleAttributesInstructions extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesInstructions; // inherited from NSObject

	static new(): GCKUIStyleAttributesInstructions; // inherited from NSObject
}

declare class GCKUIStyleAttributesMediaControl extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesMediaControl; // inherited from NSObject

	static new(): GCKUIStyleAttributesMediaControl; // inherited from NSObject

	readonly expandedController: GCKUIStyleAttributesExpandedController;

	readonly miniController: GCKUIStyleAttributesMiniController;

	readonly trackSelector: GCKUIStyleAttributesTrackSelector;
}

declare class GCKUIStyleAttributesMiniController extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesMiniController; // inherited from NSObject

	static new(): GCKUIStyleAttributesMiniController; // inherited from NSObject
}

declare class GCKUIStyleAttributesTrackSelector extends GCKUIStyleAttributes {

	static alloc(): GCKUIStyleAttributesTrackSelector; // inherited from NSObject

	static new(): GCKUIStyleAttributesTrackSelector; // inherited from NSObject
}

declare class GCKUIUtils extends NSObject {

	static alloc(): GCKUIUtils; // inherited from NSObject

	static currentViewController(): UIViewController;

	static localTimeAsString(localTime: number): string;

	static new(): GCKUIUtils; // inherited from NSObject

	static timeIntervalAsString(timeInterval: number): string;
}

declare class GCKVASTAdsRequest extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKVASTAdsRequest; // inherited from NSObject

	static new(): GCKVASTAdsRequest; // inherited from NSObject

	readonly adTagUrl: NSURL;

	readonly adsResponse: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { adTagURL: NSURL; adsResponse: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithAdTagURLAdsResponse(adTagURL: NSURL, adsResponse: string): this;

	initWithCoder(coder: NSCoder): this;
}

declare class GCKVideoInfo extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): GCKVideoInfo; // inherited from NSObject

	static new(): GCKVideoInfo; // inherited from NSObject

	readonly hdrType: GCKVideoInfoHDRType;

	readonly height: number;

	readonly width: number;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare const enum GCKVideoInfoHDRType {

	Unknown = -1,

	SDR = 0,

	DV = 1,

	HDR = 2
}

declare var kAdBreakClipNotSkippable: number;

declare var kGCKCastDeviceCategory: string;

declare var kGCKCastStateDidChangeNotification: string;

declare var kGCKCredentialsTypeCloud: string;

declare var kGCKDefaultMediaReceiverApplicationID: string;

declare var kGCKErrorCustomDataKey: string;

declare var kGCKErrorDetailedCodeKey: string;

declare var kGCKErrorDomain: string;

declare var kGCKErrorExtraInfoKey: string;

declare var kGCKErrorReasonKey: string;

declare var kGCKExpandedMediaControlsTriggeredNotification: string;

declare var kGCKFrameworkVersion: string;

declare var kGCKInvalidRequestID: number;

declare var kGCKInvalidTimeInterval: number;

declare var kGCKKeyConnectionState: string;

declare var kGCKKeyHasDiscoveredDevices: string;

declare var kGCKMediaCommandDislike: number;

declare var kGCKMediaCommandEditTracks: number;

declare var kGCKMediaCommandFollow: number;

declare var kGCKMediaCommandLike: number;

declare var kGCKMediaCommandPause: number;

declare var kGCKMediaCommandQueueNext: number;

declare var kGCKMediaCommandQueuePrevious: number;

declare var kGCKMediaCommandQueueRepeat: number;

declare var kGCKMediaCommandQueueRepeatAll: number;

declare var kGCKMediaCommandQueueRepeatOne: number;

declare var kGCKMediaCommandQueueShuffle: number;

declare var kGCKMediaCommandSeek: number;

declare var kGCKMediaCommandSetPlaybackRate: number;

declare var kGCKMediaCommandSetVolume: number;

declare var kGCKMediaCommandSkipAd: number;

declare var kGCKMediaCommandSkipBackward: number;

declare var kGCKMediaCommandSkipForward: number;

declare var kGCKMediaCommandStreamTransfer: number;

declare var kGCKMediaCommandToggleMute: number;

declare var kGCKMediaCommandUnfollow: number;

declare var kGCKMediaQueueInvalidItemID: number;

declare var kGCKMetadataKeyAlbumArtist: string;

declare var kGCKMetadataKeyAlbumTitle: string;

declare var kGCKMetadataKeyArtist: string;

declare var kGCKMetadataKeyBookTitle: string;

declare var kGCKMetadataKeyBroadcastDate: string;

declare var kGCKMetadataKeyChapterNumber: string;

declare var kGCKMetadataKeyChapterTitle: string;

declare var kGCKMetadataKeyComposer: string;

declare var kGCKMetadataKeyCreationDate: string;

declare var kGCKMetadataKeyDiscNumber: string;

declare var kGCKMetadataKeyEpisodeNumber: string;

declare var kGCKMetadataKeyHeight: string;

declare var kGCKMetadataKeyLocationLatitude: string;

declare var kGCKMetadataKeyLocationLongitude: string;

declare var kGCKMetadataKeyLocationName: string;

declare var kGCKMetadataKeyQueueItemID: string;

declare var kGCKMetadataKeyReleaseDate: string;

declare var kGCKMetadataKeySeasonNumber: string;

declare var kGCKMetadataKeySectionDuration: string;

declare var kGCKMetadataKeySectionStartAbsoluteTime: string;

declare var kGCKMetadataKeySectionStartTimeInContainer: string;

declare var kGCKMetadataKeySectionStartTimeInMedia: string;

declare var kGCKMetadataKeySeriesTitle: string;

declare var kGCKMetadataKeyStudio: string;

declare var kGCKMetadataKeySubtitle: string;

declare var kGCKMetadataKeyTitle: string;

declare var kGCKMetadataKeyTrackNumber: string;

declare var kGCKMetadataKeyWidth: string;

declare var kGCKNotificationKeyCastState: string;

declare var kGCKThreadException: string;

declare var kGCKUICastDialogDidHideNotification: string;

declare var kGCKUICastDialogWillShowNotification: string;
