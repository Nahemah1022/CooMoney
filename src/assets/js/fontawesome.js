import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faAd,
    faAddressBook,
    faAddressCard,
    faAdjust,
    faAirFreshener,
    faAlignCenter,
    faAlignJustify,
    faAlignLeft,
    faAlignRight,
    faAllergies,
    faAmbulance,
    faAmericanSignLanguageInterpreting,
    faAnchor,
    faAngleDoubleDown,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faAngleDoubleUp,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faAngleUp,
    faAngry,
    faAnkh,
    faAppleAlt,
    faArchive,
    faArchway,
    faArrowAltCircleDown,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faArrowAltCircleUp,
    faArrowCircleDown,
    faArrowCircleLeft,
    faArrowCircleRight,
    faArrowCircleUp,
    faArrowDown,
    faArrowLeft,
    faArrowRight,
    faArrowUp,
    faArrowsAlt,
    faArrowsAltH,
    faArrowsAltV,
    faAssistiveListeningSystems,
    faAsterisk,
    faAt,
    faAtlas,
    faAtom,
    faAudioDescription,
    faAward,
    faBaby,
    faBabyCarriage,
    faBackspace,
    faBackward,
    faBacon,
    faBahai,
    faBalanceScale,
    faBalanceScaleLeft,
    faBalanceScaleRight,
    faBan,
    faBandAid,
    faBarcode,
    faBars,
    faBaseballBall,
    faBasketballBall,
    faBath,
    faBatteryEmpty,
    faBatteryFull,
    faBatteryHalf,
    faBatteryQuarter,
    faBatteryThreeQuarters,
    faBed,
    faBeer,
    faBell,
    faBellSlash,
    faBezierCurve,
    faBible,
    faBicycle,
    faBiking,
    faBinoculars,
    faBiohazard,
    faBirthdayCake,
    faBlender,
    faBlenderPhone,
    faBlind,
    faBlog,
    faBold,
    faBolt,
    faBomb,
    faBone,
    faBong,
    faBook,
    faBookDead,
    faBookMedical,
    faBookOpen,
    faBookReader,
    faBookmark,
    faBorderAll,
    faBorderNone,
    faBorderStyle,
    faBowlingBall,
    faBox,
    faBoxOpen,
    faBoxTissue,
    faBoxes,
    faBraille,
    faBrain,
    faBreadSlice,
    faBriefcase,
    faBriefcaseMedical,
    faBroadcastTower,
    faBroom,
    faBrush,
    faBug,
    faBuilding,
    faBullhorn,
    faBullseye,
    faBurn,
    faBus,
    faBusAlt,
    faBusinessTime,
    faCalculator,
    faCalendar,
    faCalendarAlt,
    faCalendarCheck,
    faCalendarDay,
    faCalendarMinus,
    faCalendarPlus,
    faCalendarTimes,
    faCalendarWeek,
    faCamera,
    faCameraRetro,
    faCampground,
    faCandyCane,
    faCannabis,
    faCapsules,
    faCar,
    faCarAlt,
    faCarBattery,
    faCarCrash,
    faCarSide,
    faCaravan,
    faCaretDown,
    faCaretLeft,
    faCaretRight,
    faCaretSquareDown,
    faCaretSquareLeft,
    faCaretSquareRight,
    faCaretSquareUp,
    faCaretUp,
    faCarrot,
    faCartArrowDown,
    faCartPlus,
    faCashRegister,
    faCat,
    faCertificate,
    faChair,
    faChalkboard,
    faChalkboardTeacher,
    faChargingStation,
    faChartArea,
    faChartBar,
    faChartLine,
    faChartPie,
    faCheck,
    faCheckCircle,
    faCheckDouble,
    faCheckSquare,
    faCheese,
    faChess,
    faChessBishop,
    faChessBoard,
    faChessKing,
    faChessKnight,
    faChessPawn,
    faChessQueen,
    faChessRook,
    faChevronCircleDown,
    faChevronCircleLeft,
    faChevronCircleRight,
    faChevronCircleUp,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faChevronUp,
    faChild,
    faChurch,
    faCircle,
    faCircleNotch,
    faCity,
    faClinicMedical,
    faClipboard,
    faClipboardCheck,
    faClipboardList,
    faClock,
    faClone,
    faClosedCaptioning,
    faCloud,
    faCloudDownloadAlt,
    faCloudMeatball,
    faCloudMoon,
    faCloudMoonRain,
    faCloudRain,
    faCloudShowersHeavy,
    faCloudSun,
    faCloudSunRain,
    faCloudUploadAlt,
    faCocktail,
    faCode,
    faCodeBranch,
    faCoffee,
    faCog,
    faCogs,
    faCoins,
    faColumns,
    faComment,
    faCommentAlt,
    faCommentDollar,
    faCommentDots,
    faCommentMedical,
    faCommentSlash,
    faComments,
    faCommentsDollar,
    faCompactDisc,
    faCompass,
    faCompress,
    faCompressAlt,
    faCompressArrowsAlt,
    faConciergeBell,
    faCookie,
    faCookieBite,
    faCopy,
    faCopyright,
    faCouch,
    faCreditCard,
    faCrop,
    faCropAlt,
    faCross,
    faCrosshairs,
    faCrow,
    faCrown,
    faCrutch,
    faCube,
    faCubes,
    faCut,
    faDatabase,
    faDeaf,
    faDemocrat,
    faDesktop,
    faDharmachakra,
    faDiagnoses,
    faDice,
    faDiceD20,
    faDiceD6,
    faDiceFive,
    faDiceFour,
    faDiceOne,
    faDiceSix,
    faDiceThree,
    faDiceTwo,
    faDigitalTachograph,
    faDirections,
    faDisease,
    faDivide,
    faDizzy,
    faDna,
    faDog,
    faDollarSign,
    faDolly,
    faDollyFlatbed,
    faDonate,
    faDoorClosed,
    faDoorOpen,
    faDotCircle,
    faDove,
    faDownload,
    faDraftingCompass,
    faDragon,
    faDrawPolygon,
    faDrum,
    faDrumSteelpan,
    faDrumstickBite,
    faDumbbell,
    faDumpster,
    faDumpsterFire,
    faDungeon,
    faEdit,
    faEgg,
    faEject,
    faEllipsisH,
    faEllipsisV,
    faEnvelope,
    faEnvelopeOpen,
    faEnvelopeOpenText,
    faEnvelopeSquare,
    faEquals,
    faEraser,
    faEthernet,
    faEuroSign,
    faExchangeAlt,
    faExclamation,
    faExclamationCircle,
    faExclamationTriangle,
    faExpand,
    faExpandAlt,
    faExpandArrowsAlt,
    faExternalLinkAlt,
    faExternalLinkSquareAlt,
    faEye,
    faEyeDropper,
    faEyeSlash,
    faFan,
    faFastBackward,
    faFastForward,
    faFaucet,
    faFax,
    faFeather,
    faFeatherAlt,
    faFemale,
    faFighterJet,
    faFile,
    faFileAlt,
    faFileArchive,
    faFileAudio,
    faFileCode,
    faFileContract,
    faFileCsv,
    faFileDownload,
    faFileExcel,
    faFileExport,
    faFileImage,
    faFileImport,
    faFileInvoice,
    faFileInvoiceDollar,
    faFileMedical,
    faFileMedicalAlt,
    faFilePdf,
    faFilePowerpoint,
    faFilePrescription,
    faFileSignature,
    faFileUpload,
    faFileVideo,
    faFileWord,
    faFill,
    faFillDrip,
    faFilm,
    faFilter,
    faFingerprint,
    faFire,
    faFireAlt,
    faFireExtinguisher,
    faFirstAid,
    faFish,
    faFistRaised,
    faFlag,
    faFlagCheckered,
    faFlagUsa,
    faFlask,
    faFlushed,
    faFolder,
    faFolderMinus,
    faFolderOpen,
    faFolderPlus,
    faFont,
    faFontAwesomeLogoFull,
    faFootballBall,
    faForward,
    faFrog,
    faFrown,
    faFrownOpen,
    faFunnelDollar,
    faFutbol,
    faGamepad,
    faGasPump,
    faGavel,
    faGem,
    faGenderless,
    faGhost,
    faGift,
    faGifts,
    faGlassCheers,
    faGlassMartini,
    faGlassMartiniAlt,
    faGlassWhiskey,
    faGlasses,
    faGlobe,
    faGlobeAfrica,
    faGlobeAmericas,
    faGlobeAsia,
    faGlobeEurope,
    faGolfBall,
    faGopuram,
    faGraduationCap,
    faGreaterThan,
    faGreaterThanEqual,
    faGrimace,
    faGrin,
    faGrinAlt,
    faGrinBeam,
    faGrinBeamSweat,
    faGrinHearts,
    faGrinSquint,
    faGrinSquintTears,
    faGrinStars,
    faGrinTears,
    faGrinTongue,
    faGrinTongueSquint,
    faGrinTongueWink,
    faGrinWink,
    faGripHorizontal,
    faGripLines,
    faGripLinesVertical,
    faGripVertical,
    faGuitar,
    faHSquare,
    faHamburger,
    faHammer,
    faHamsa,
    faHandHolding,
    faHandHoldingHeart,
    faHandHoldingMedical,
    faHandHoldingUsd,
    faHandHoldingWater,
    faHandLizard,
    faHandMiddleFinger,
    faHandPaper,
    faHandPeace,
    faHandPointDown,
    faHandPointLeft,
    faHandPointRight,
    faHandPointUp,
    faHandPointer,
    faHandRock,
    faHandScissors,
    faHandSparkles,
    faHandSpock,
    faHands,
    faHandsHelping,
    faHandsWash,
    faHandshake,
    faHandshakeAltSlash,
    faHandshakeSlash,
    faHanukiah,
    faHardHat,
    faHashtag,
    faHatCowboy,
    faHatCowboySide,
    faHatWizard,
    faHdd,
    faHeadSideCough,
    faHeadSideCoughSlash,
    faHeadSideMask,
    faHeadSideVirus,
    faHeading,
    faHeadphones,
    faHeadphonesAlt,
    faHeadset,
    faHeart,
    faHeartBroken,
    faHeartbeat,
    faHelicopter,
    faHighlighter,
    faHiking,
    faHippo,
    faHistory,
    faHockeyPuck,
    faHollyBerry,
    faHome,
    faHorse,
    faHorseHead,
    faHospital,
    faHospitalAlt,
    faHospitalSymbol,
    faHospitalUser,
    faHotTub,
    faHotdog,
    faHotel,
    faHourglass,
    faHourglassEnd,
    faHourglassHalf,
    faHourglassStart,
    faHouseDamage,
    faHouseUser,
    faHryvnia,
    faICursor,
    faIceCream,
    faIcicles,
    faIcons,
    faIdBadge,
    faIdCard,
    faIdCardAlt,
    faIgloo,
    faImage,
    faImages,
    faInbox,
    faIndent,
    faIndustry,
    faInfinity,
    faInfo,
    faInfoCircle,
    faItalic,
    faJedi,
    faJoint,
    faJournalWhills,
    faKaaba,
    faKey,
    faKeyboard,
    faKhanda,
    faKiss,
    faKissBeam,
    faKissWinkHeart,
    faKiwiBird,
    faLandmark,
    faLanguage,
    faLaptop,
    faLaptopCode,
    faLaptopHouse,
    faLaptopMedical,
    faLaugh,
    faLaughBeam,
    faLaughSquint,
    faLaughWink,
    faLayerGroup,
    faLeaf,
    faLemon,
    faLessThan,
    faLessThanEqual,
    faLevelDownAlt,
    faLevelUpAlt,
    faLifeRing,
    faLightbulb,
    faLink,
    faLiraSign,
    faList,
    faListAlt,
    faListOl,
    faListUl,
    faLocationArrow,
    faLock,
    faLockOpen,
    faLongArrowAltDown,
    faLongArrowAltLeft,
    faLongArrowAltRight,
    faLongArrowAltUp,
    faLowVision,
    faLuggageCart,
    faLungs,
    faLungsVirus,
    faMagic,
    faMagnet,
    faMailBulk,
    faMale,
    faMap,
    faMapMarked,
    faMapMarkedAlt,
    faMapMarker,
    faMapMarkerAlt,
    faMapPin,
    faMapSigns,
    faMarker,
    faMars,
    faMarsDouble,
    faMarsStroke,
    faMarsStrokeH,
    faMarsStrokeV,
    faMask,
    faMedal,
    faMedkit,
    faMeh,
    faMehBlank,
    faMehRollingEyes,
    faMemory,
    faMenorah,
    faMercury,
    faMeteor,
    faMicrochip,
    faMicrophone,
    faMicrophoneAlt,
    faMicrophoneAltSlash,
    faMicrophoneSlash,
    faMicroscope,
    faMinus,
    faMinusCircle,
    faMinusSquare,
    faMitten,
    faMobile,
    faMobileAlt,
    faMoneyBill,
    faMoneyBillAlt,
    faMoneyBillWave,
    faMoneyBillWaveAlt,
    faMoneyCheck,
    faMoneyCheckAlt,
    faMonument,
    faMoon,
    faMortarPestle,
    faMosque,
    faMotorcycle,
    faMountain,
    faMouse,
    faMousePointer,
    faMugHot,
    faMusic,
    faNetworkWired,
    faNeuter,
    faNewspaper,
    faNotEqual,
    faNotesMedical,
    faObjectGroup,
    faObjectUngroup,
    faOilCan,
    faOm,
    faOtter,
    faOutdent,
    faPager,
    faPaintBrush,
    faPaintRoller,
    faPalette,
    faPallet,
    faPaperPlane,
    faPaperclip,
    faParachuteBox,
    faParagraph,
    faParking,
    faPassport,
    faPastafarianism,
    faPaste,
    faPause,
    faPauseCircle,
    faPaw,
    faPeace,
    faPen,
    faPenAlt,
    faPenFancy,
    faPenNib,
    faPenSquare,
    faPencilAlt,
    faPencilRuler,
    faPeopleArrows,
    faPeopleCarry,
    faPepperHot,
    faPercent,
    faPercentage,
    faPersonBooth,
    faPhone,
    faPhoneAlt,
    faPhoneSlash,
    faPhoneSquare,
    faPhoneSquareAlt,
    faPhoneVolume,
    faPhotoVideo,
    faPiggyBank,
    faPills,
    faPizzaSlice,
    faPlaceOfWorship,
    faPlane,
    faPlaneArrival,
    faPlaneDeparture,
    faPlaneSlash,
    faPlay,
    faPlayCircle,
    faPlug,
    faPlus,
    faPlusCircle,
    faPlusSquare,
    faPodcast,
    faPoll,
    faPollH,
    faPoo,
    faPooStorm,
    faPoop,
    faPortrait,
    faPoundSign,
    faPowerOff,
    faPray,
    faPrayingHands,
    faPrescription,
    faPrescriptionBottle,
    faPrescriptionBottleAlt,
    faPrint,
    faProcedures,
    faProjectDiagram,
    faPumpMedical,
    faPumpSoap,
    faPuzzlePiece,
    faQrcode,
    faQuestion,
    faQuestionCircle,
    faQuidditch,
    faQuoteLeft,
    faQuoteRight,
    faQuran,
    faRadiation,
    faRadiationAlt,
    faRainbow,
    faRandom,
    faReceipt,
    faRecordVinyl,
    faRecycle,
    faRedo,
    faRedoAlt,
    faRegistered,
    faRemoveFormat,
    faReply,
    faReplyAll,
    faRepublican,
    faRestroom,
    faRetweet,
    faRibbon,
    faRing,
    faRoad,
    faRobot,
    faRocket,
    faRoute,
    faRss,
    faRssSquare,
    faRubleSign,
    faRuler,
    faRulerCombined,
    faRulerHorizontal,
    faRulerVertical,
    faRunning,
    faRupeeSign,
    faSadCry,
    faSadTear,
    faSatellite,
    faSatelliteDish,
    faSave,
    faSchool,
    faScrewdriver,
    faScroll,
    faSdCard,
    faSearch,
    faSearchDollar,
    faSearchLocation,
    faSearchMinus,
    faSearchPlus,
    faSeedling,
    faServer,
    faShapes,
    faShare,
    faShareAlt,
    faShareAltSquare,
    faShareSquare,
    faShekelSign,
    faShieldAlt,
    faShieldVirus,
    faShip,
    faShippingFast,
    faShoePrints,
    faShoppingBag,
    faShoppingBasket,
    faShoppingCart,
    faShower,
    faShuttleVan,
    faSign,
    faSignInAlt,
    faSignLanguage,
    faSignOutAlt,
    faSignal,
    faSignature,
    faSimCard,
    faSitemap,
    faSkating,
    faSkiing,
    faSkiingNordic,
    faSkull,
    faSkullCrossbones,
    faSlash,
    faSleigh,
    faSlidersH,
    faSmile,
    faSmileBeam,
    faSmileWink,
    faSmog,
    faSmoking,
    faSmokingBan,
    faSms,
    faSnowboarding,
    faSnowflake,
    faSnowman,
    faSnowplow,
    faSoap,
    faSocks,
    faSolarPanel,
    faSort,
    faSortAlphaDown,
    faSortAlphaDownAlt,
    faSortAlphaUp,
    faSortAlphaUpAlt,
    faSortAmountDown,
    faSortAmountDownAlt,
    faSortAmountUp,
    faSortAmountUpAlt,
    faSortDown,
    faSortNumericDown,
    faSortNumericDownAlt,
    faSortNumericUp,
    faSortNumericUpAlt,
    faSortUp,
    faSpa,
    faSpaceShuttle,
    faSpellCheck,
    faSpider,
    faSpinner,
    faSplotch,
    faSprayCan,
    faSquare,
    faSquareFull,
    faSquareRootAlt,
    faStamp,
    faStar,
    faStarAndCrescent,
    faStarHalf,
    faStarHalfAlt,
    faStarOfDavid,
    faStarOfLife,
    faStepBackward,
    faStepForward,
    faStethoscope,
    faStickyNote,
    faStop,
    faStopCircle,
    faStopwatch,
    faStopwatch20,
    faStore,
    faStoreAlt,
    faStoreAltSlash,
    faStoreSlash,
    faStream,
    faStreetView,
    faStrikethrough,
    faStroopwafel,
    faSubscript,
    faSubway,
    faSuitcase,
    faSuitcaseRolling,
    faSun,
    faSuperscript,
    faSurprise,
    faSwatchbook,
    faSwimmer,
    faSwimmingPool,
    faSynagogue,
    faSync,
    faSyncAlt,
    faSyringe,
    faTable,
    faTableTennis,
    faTablet,
    faTabletAlt,
    faTablets,
    faTachometerAlt,
    faTag,
    faTags,
    faTape,
    faTasks,
    faTaxi,
    faTeeth,
    faTeethOpen,
    faTemperatureHigh,
    faTemperatureLow,
    faTenge,
    faTerminal,
    faTextHeight,
    faTextWidth,
    faTh,
    faThLarge,
    faThList,
    faTheaterMasks,
    faThermometer,
    faThermometerEmpty,
    faThermometerFull,
    faThermometerHalf,
    faThermometerQuarter,
    faThermometerThreeQuarters,
    faThumbsDown,
    faThumbsUp,
    faThumbtack,
    faTicketAlt,
    faTimes,
    faTimesCircle,
    faTint,
    faTintSlash,
    faTired,
    faToggleOff,
    faToggleOn,
    faToilet,
    faToiletPaper,
    faToiletPaperSlash,
    faToolbox,
    faTools,
    faTooth,
    faTorah,
    faToriiGate,
    faTractor,
    faTrademark,
    faTrafficLight,
    faTrailer,
    faTrain,
    faTram,
    faTransgender,
    faTransgenderAlt,
    faTrash,
    faTrashAlt,
    faTrashRestore,
    faTrashRestoreAlt,
    faTree,
    faTrophy,
    faTruck,
    faTruckLoading,
    faTruckMonster,
    faTruckMoving,
    faTruckPickup,
    faTshirt,
    faTty,
    faTv,
    faUmbrella,
    faUmbrellaBeach,
    faUnderline,
    faUndo,
    faUndoAlt,
    faUniversalAccess,
    faUniversity,
    faUnlink,
    faUnlock,
    faUnlockAlt,
    faUpload,
    faUser,
    faUserAlt,
    faUserAltSlash,
    faUserAstronaut,
    faUserCheck,
    faUserCircle,
    faUserClock,
    faUserCog,
    faUserEdit,
    faUserFriends,
    faUserGraduate,
    faUserInjured,
    faUserLock,
    faUserMd,
    faUserMinus,
    faUserNinja,
    faUserNurse,
    faUserPlus,
    faUserSecret,
    faUserShield,
    faUserSlash,
    faUserTag,
    faUserTie,
    faUserTimes,
    faUsers,
    faUsersCog,
    faUtensilSpoon,
    faUtensils,
    faVectorSquare,
    faVenus,
    faVenusDouble,
    faVenusMars,
    faVial,
    faVials,
    faVideo,
    faVideoSlash,
    faVihara,
    faVirus,
    faVirusSlash,
    faViruses,
    faVoicemail,
    faVolleyballBall,
    faVolumeDown,
    faVolumeMute,
    faVolumeOff,
    faVolumeUp,
    faVoteYea,
    faVrCardboard,
    faWalking,
    faWallet,
    faWarehouse,
    faWater,
    faWaveSquare,
    faWeight,
    faWeightHanging,
    faWheelchair,
    faWifi,
    faWind,
    faWindowClose,
    faWindowMaximize,
    faWindowMinimize,
    faWindowRestore,
    faWineBottle,
    faWineGlass,
    faWineGlassAlt,
    faWonSign,
    faWrench,
    faXRay,
    faYenSign
} from '@fortawesome/free-solid-svg-icons'

let FontLibary = [
    faAd,
    faAddressBook,
    faAddressCard,
    faAdjust,
    faAirFreshener,
    faAlignCenter,
    faAlignJustify,
    faAlignLeft,
    faAlignRight,
    faAllergies,
    faAmbulance,
    faAmericanSignLanguageInterpreting,
    faAnchor,
    faAngleDoubleDown,
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faAngleDoubleUp,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faAngleUp,
    faAngry,
    faAnkh,
    faAppleAlt,
    faArchive,
    faArchway,
    faArrowAltCircleDown,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faArrowAltCircleUp,
    faArrowCircleDown,
    faArrowCircleLeft,
    faArrowCircleRight,
    faArrowCircleUp,
    faArrowDown,
    faArrowLeft,
    faArrowRight,
    faArrowUp,
    faArrowsAlt,
    faArrowsAltH,
    faArrowsAltV,
    faAssistiveListeningSystems,
    faAsterisk,
    faAt,
    faAtlas,
    faAtom,
    faAudioDescription,
    faAward,
    faBaby,
    faBabyCarriage,
    faBackspace,
    faBackward,
    faBacon,
    faBahai,
    faBalanceScale,
    faBalanceScaleLeft,
    faBalanceScaleRight,
    faBan,
    faBandAid,
    faBarcode,
    faBars,
    faBaseballBall,
    faBasketballBall,
    faBath,
    faBatteryEmpty,
    faBatteryFull,
    faBatteryHalf,
    faBatteryQuarter,
    faBatteryThreeQuarters,
    faBed,
    faBeer,
    faBell,
    faBellSlash,
    faBezierCurve,
    faBible,
    faBicycle,
    faBiking,
    faBinoculars,
    faBiohazard,
    faBirthdayCake,
    faBlender,
    faBlenderPhone,
    faBlind,
    faBlog,
    faBold,
    faBolt,
    faBomb,
    faBone,
    faBong,
    faBook,
    faBookDead,
    faBookMedical,
    faBookOpen,
    faBookReader,
    faBookmark,
    faBorderAll,
    faBorderNone,
    faBorderStyle,
    faBowlingBall,
    faBox,
    faBoxOpen,
    faBoxTissue,
    faBoxes,
    faBraille,
    faBrain,
    faBreadSlice,
    faBriefcase,
    faBriefcaseMedical,
    faBroadcastTower,
    faBroom,
    faBrush,
    faBug,
    faBuilding,
    faBullhorn,
    faBullseye,
    faBurn,
    faBus,
    faBusAlt,
    faBusinessTime,
    faCalculator,
    faCalendar,
    faCalendarAlt,
    faCalendarCheck,
    faCalendarDay,
    faCalendarMinus,
    faCalendarPlus,
    faCalendarTimes,
    faCalendarWeek,
    faCamera,
    faCameraRetro,
    faCampground,
    faCandyCane,
    faCannabis,
    faCapsules,
    faCar,
    faCarAlt,
    faCarBattery,
    faCarCrash,
    faCarSide,
    faCaravan,
    faCaretDown,
    faCaretLeft,
    faCaretRight,
    faCaretSquareDown,
    faCaretSquareLeft,
    faCaretSquareRight,
    faCaretSquareUp,
    faCaretUp,
    faCarrot,
    faCartArrowDown,
    faCartPlus,
    faCashRegister,
    faCat,
    faCertificate,
    faChair,
    faChalkboard,
    faChalkboardTeacher,
    faChargingStation,
    faChartArea,
    faChartBar,
    faChartLine,
    faChartPie,
    faCheck,
    faCheckCircle,
    faCheckDouble,
    faCheckSquare,
    faCheese,
    faChess,
    faChessBishop,
    faChessBoard,
    faChessKing,
    faChessKnight,
    faChessPawn,
    faChessQueen,
    faChessRook,
    faChevronCircleDown,
    faChevronCircleLeft,
    faChevronCircleRight,
    faChevronCircleUp,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faChevronUp,
    faChild,
    faChurch,
    faCircle,
    faCircleNotch,
    faCity,
    faClinicMedical,
    faClipboard,
    faClipboardCheck,
    faClipboardList,
    faClock,
    faClone,
    faClosedCaptioning,
    faCloud,
    faCloudDownloadAlt,
    faCloudMeatball,
    faCloudMoon,
    faCloudMoonRain,
    faCloudRain,
    faCloudShowersHeavy,
    faCloudSun,
    faCloudSunRain,
    faCloudUploadAlt,
    faCocktail,
    faCode,
    faCodeBranch,
    faCoffee,
    faCog,
    faCogs,
    faCoins,
    faColumns,
    faComment,
    faCommentAlt,
    faCommentDollar,
    faCommentDots,
    faCommentMedical,
    faCommentSlash,
    faComments,
    faCommentsDollar,
    faCompactDisc,
    faCompass,
    faCompress,
    faCompressAlt,
    faCompressArrowsAlt,
    faConciergeBell,
    faCookie,
    faCookieBite,
    faCopy,
    faCopyright,
    faCouch,
    faCreditCard,
    faCrop,
    faCropAlt,
    faCross,
    faCrosshairs,
    faCrow,
    faCrown,
    faCrutch,
    faCube,
    faCubes,
    faCut,
    faDatabase,
    faDeaf,
    faDemocrat,
    faDesktop,
    faDharmachakra,
    faDiagnoses,
    faDice,
    faDiceD20,
    faDiceD6,
    faDiceFive,
    faDiceFour,
    faDiceOne,
    faDiceSix,
    faDiceThree,
    faDiceTwo,
    faDigitalTachograph,
    faDirections,
    faDisease,
    faDivide,
    faDizzy,
    faDna,
    faDog,
    faDollarSign,
    faDolly,
    faDollyFlatbed,
    faDonate,
    faDoorClosed,
    faDoorOpen,
    faDotCircle,
    faDove,
    faDownload,
    faDraftingCompass,
    faDragon,
    faDrawPolygon,
    faDrum,
    faDrumSteelpan,
    faDrumstickBite,
    faDumbbell,
    faDumpster,
    faDumpsterFire,
    faDungeon,
    faEdit,
    faEgg,
    faEject,
    faEllipsisH,
    faEllipsisV,
    faEnvelope,
    faEnvelopeOpen,
    faEnvelopeOpenText,
    faEnvelopeSquare,
    faEquals,
    faEraser,
    faEthernet,
    faEuroSign,
    faExchangeAlt,
    faExclamation,
    faExclamationCircle,
    faExclamationTriangle,
    faExpand,
    faExpandAlt,
    faExpandArrowsAlt,
    faExternalLinkAlt,
    faExternalLinkSquareAlt,
    faEye,
    faEyeDropper,
    faEyeSlash,
    faFan,
    faFastBackward,
    faFastForward,
    faFaucet,
    faFax,
    faFeather,
    faFeatherAlt,
    faFemale,
    faFighterJet,
    faFile,
    faFileAlt,
    faFileArchive,
    faFileAudio,
    faFileCode,
    faFileContract,
    faFileCsv,
    faFileDownload,
    faFileExcel,
    faFileExport,
    faFileImage,
    faFileImport,
    faFileInvoice,
    faFileInvoiceDollar,
    faFileMedical,
    faFileMedicalAlt,
    faFilePdf,
    faFilePowerpoint,
    faFilePrescription,
    faFileSignature,
    faFileUpload,
    faFileVideo,
    faFileWord,
    faFill,
    faFillDrip,
    faFilm,
    faFilter,
    faFingerprint,
    faFire,
    faFireAlt,
    faFireExtinguisher,
    faFirstAid,
    faFish,
    faFistRaised,
    faFlag,
    faFlagCheckered,
    faFlagUsa,
    faFlask,
    faFlushed,
    faFolder,
    faFolderMinus,
    faFolderOpen,
    faFolderPlus,
    faFont,
    faFontAwesomeLogoFull,
    faFootballBall,
    faForward,
    faFrog,
    faFrown,
    faFrownOpen,
    faFunnelDollar,
    faFutbol,
    faGamepad,
    faGasPump,
    faGavel,
    faGem,
    faGenderless,
    faGhost,
    faGift,
    faGifts,
    faGlassCheers,
    faGlassMartini,
    faGlassMartiniAlt,
    faGlassWhiskey,
    faGlasses,
    faGlobe,
    faGlobeAfrica,
    faGlobeAmericas,
    faGlobeAsia,
    faGlobeEurope,
    faGolfBall,
    faGopuram,
    faGraduationCap,
    faGreaterThan,
    faGreaterThanEqual,
    faGrimace,
    faGrin,
    faGrinAlt,
    faGrinBeam,
    faGrinBeamSweat,
    faGrinHearts,
    faGrinSquint,
    faGrinSquintTears,
    faGrinStars,
    faGrinTears,
    faGrinTongue,
    faGrinTongueSquint,
    faGrinTongueWink,
    faGrinWink,
    faGripHorizontal,
    faGripLines,
    faGripLinesVertical,
    faGripVertical,
    faGuitar,
    faHSquare,
    faHamburger,
    faHammer,
    faHamsa,
    faHandHolding,
    faHandHoldingHeart,
    faHandHoldingMedical,
    faHandHoldingUsd,
    faHandHoldingWater,
    faHandLizard,
    faHandMiddleFinger,
    faHandPaper,
    faHandPeace,
    faHandPointDown,
    faHandPointLeft,
    faHandPointRight,
    faHandPointUp,
    faHandPointer,
    faHandRock,
    faHandScissors,
    faHandSparkles,
    faHandSpock,
    faHands,
    faHandsHelping,
    faHandsWash,
    faHandshake,
    faHandshakeAltSlash,
    faHandshakeSlash,
    faHanukiah,
    faHardHat,
    faHashtag,
    faHatCowboy,
    faHatCowboySide,
    faHatWizard,
    faHdd,
    faHeadSideCough,
    faHeadSideCoughSlash,
    faHeadSideMask,
    faHeadSideVirus,
    faHeading,
    faHeadphones,
    faHeadphonesAlt,
    faHeadset,
    faHeart,
    faHeartBroken,
    faHeartbeat,
    faHelicopter,
    faHighlighter,
    faHiking,
    faHippo,
    faHistory,
    faHockeyPuck,
    faHollyBerry,
    faHome,
    faHorse,
    faHorseHead,
    faHospital,
    faHospitalAlt,
    faHospitalSymbol,
    faHospitalUser,
    faHotTub,
    faHotdog,
    faHotel,
    faHourglass,
    faHourglassEnd,
    faHourglassHalf,
    faHourglassStart,
    faHouseDamage,
    faHouseUser,
    faHryvnia,
    faICursor,
    faIceCream,
    faIcicles,
    faIcons,
    faIdBadge,
    faIdCard,
    faIdCardAlt,
    faIgloo,
    faImage,
    faImages,
    faInbox,
    faIndent,
    faIndustry,
    faInfinity,
    faInfo,
    faInfoCircle,
    faItalic,
    faJedi,
    faJoint,
    faJournalWhills,
    faKaaba,
    faKey,
    faKeyboard,
    faKhanda,
    faKiss,
    faKissBeam,
    faKissWinkHeart,
    faKiwiBird,
    faLandmark,
    faLanguage,
    faLaptop,
    faLaptopCode,
    faLaptopHouse,
    faLaptopMedical,
    faLaugh,
    faLaughBeam,
    faLaughSquint,
    faLaughWink,
    faLayerGroup,
    faLeaf,
    faLemon,
    faLessThan,
    faLessThanEqual,
    faLevelDownAlt,
    faLevelUpAlt,
    faLifeRing,
    faLightbulb,
    faLink,
    faLiraSign,
    faList,
    faListAlt,
    faListOl,
    faListUl,
    faLocationArrow,
    faLock,
    faLockOpen,
    faLongArrowAltDown,
    faLongArrowAltLeft,
    faLongArrowAltRight,
    faLongArrowAltUp,
    faLowVision,
    faLuggageCart,
    faLungs,
    faLungsVirus,
    faMagic,
    faMagnet,
    faMailBulk,
    faMale,
    faMap,
    faMapMarked,
    faMapMarkedAlt,
    faMapMarker,
    faMapMarkerAlt,
    faMapPin,
    faMapSigns,
    faMarker,
    faMars,
    faMarsDouble,
    faMarsStroke,
    faMarsStrokeH,
    faMarsStrokeV,
    faMask,
    faMedal,
    faMedkit,
    faMeh,
    faMehBlank,
    faMehRollingEyes,
    faMemory,
    faMenorah,
    faMercury,
    faMeteor,
    faMicrochip,
    faMicrophone,
    faMicrophoneAlt,
    faMicrophoneAltSlash,
    faMicrophoneSlash,
    faMicroscope,
    faMinus,
    faMinusCircle,
    faMinusSquare,
    faMitten,
    faMobile,
    faMobileAlt,
    faMoneyBill,
    faMoneyBillAlt,
    faMoneyBillWave,
    faMoneyBillWaveAlt,
    faMoneyCheck,
    faMoneyCheckAlt,
    faMonument,
    faMoon,
    faMortarPestle,
    faMosque,
    faMotorcycle,
    faMountain,
    faMouse,
    faMousePointer,
    faMugHot,
    faMusic,
    faNetworkWired,
    faNeuter,
    faNewspaper,
    faNotEqual,
    faNotesMedical,
    faObjectGroup,
    faObjectUngroup,
    faOilCan,
    faOm,
    faOtter,
    faOutdent,
    faPager,
    faPaintBrush,
    faPaintRoller,
    faPalette,
    faPallet,
    faPaperPlane,
    faPaperclip,
    faParachuteBox,
    faParagraph,
    faParking,
    faPassport,
    faPastafarianism,
    faPaste,
    faPause,
    faPauseCircle,
    faPaw,
    faPeace,
    faPen,
    faPenAlt,
    faPenFancy,
    faPenNib,
    faPenSquare,
    faPencilAlt,
    faPencilRuler,
    faPeopleArrows,
    faPeopleCarry,
    faPepperHot,
    faPercent,
    faPercentage,
    faPersonBooth,
    faPhone,
    faPhoneAlt,
    faPhoneSlash,
    faPhoneSquare,
    faPhoneSquareAlt,
    faPhoneVolume,
    faPhotoVideo,
    faPiggyBank,
    faPills,
    faPizzaSlice,
    faPlaceOfWorship,
    faPlane,
    faPlaneArrival,
    faPlaneDeparture,
    faPlaneSlash,
    faPlay,
    faPlayCircle,
    faPlug,
    faPlus,
    faPlusCircle,
    faPlusSquare,
    faPodcast,
    faPoll,
    faPollH,
    faPoo,
    faPooStorm,
    faPoop,
    faPortrait,
    faPoundSign,
    faPowerOff,
    faPray,
    faPrayingHands,
    faPrescription,
    faPrescriptionBottle,
    faPrescriptionBottleAlt,
    faPrint,
    faProcedures,
    faProjectDiagram,
    faPumpMedical,
    faPumpSoap,
    faPuzzlePiece,
    faQrcode,
    faQuestion,
    faQuestionCircle,
    faQuidditch,
    faQuoteLeft,
    faQuoteRight,
    faQuran,
    faRadiation,
    faRadiationAlt,
    faRainbow,
    faRandom,
    faReceipt,
    faRecordVinyl,
    faRecycle,
    faRedo,
    faRedoAlt,
    faRegistered,
    faRemoveFormat,
    faReply,
    faReplyAll,
    faRepublican,
    faRestroom,
    faRetweet,
    faRibbon,
    faRing,
    faRoad,
    faRobot,
    faRocket,
    faRoute,
    faRss,
    faRssSquare,
    faRubleSign,
    faRuler,
    faRulerCombined,
    faRulerHorizontal,
    faRulerVertical,
    faRunning,
    faRupeeSign,
    faSadCry,
    faSadTear,
    faSatellite,
    faSatelliteDish,
    faSave,
    faSchool,
    faScrewdriver,
    faScroll,
    faSdCard,
    faSearch,
    faSearchDollar,
    faSearchLocation,
    faSearchMinus,
    faSearchPlus,
    faSeedling,
    faServer,
    faShapes,
    faShare,
    faShareAlt,
    faShareAltSquare,
    faShareSquare,
    faShekelSign,
    faShieldAlt,
    faShieldVirus,
    faShip,
    faShippingFast,
    faShoePrints,
    faShoppingBag,
    faShoppingBasket,
    faShoppingCart,
    faShower,
    faShuttleVan,
    faSign,
    faSignInAlt,
    faSignLanguage,
    faSignOutAlt,
    faSignal,
    faSignature,
    faSimCard,
    faSitemap,
    faSkating,
    faSkiing,
    faSkiingNordic,
    faSkull,
    faSkullCrossbones,
    faSlash,
    faSleigh,
    faSlidersH,
    faSmile,
    faSmileBeam,
    faSmileWink,
    faSmog,
    faSmoking,
    faSmokingBan,
    faSms,
    faSnowboarding,
    faSnowflake,
    faSnowman,
    faSnowplow,
    faSoap,
    faSocks,
    faSolarPanel,
    faSort,
    faSortAlphaDown,
    faSortAlphaDownAlt,
    faSortAlphaUp,
    faSortAlphaUpAlt,
    faSortAmountDown,
    faSortAmountDownAlt,
    faSortAmountUp,
    faSortAmountUpAlt,
    faSortDown,
    faSortNumericDown,
    faSortNumericDownAlt,
    faSortNumericUp,
    faSortNumericUpAlt,
    faSortUp,
    faSpa,
    faSpaceShuttle,
    faSpellCheck,
    faSpider,
    faSpinner,
    faSplotch,
    faSprayCan,
    faSquare,
    faSquareFull,
    faSquareRootAlt,
    faStamp,
    faStar,
    faStarAndCrescent,
    faStarHalf,
    faStarHalfAlt,
    faStarOfDavid,
    faStarOfLife,
    faStepBackward,
    faStepForward,
    faStethoscope,
    faStickyNote,
    faStop,
    faStopCircle,
    faStopwatch,
    faStopwatch20,
    faStore,
    faStoreAlt,
    faStoreAltSlash,
    faStoreSlash,
    faStream,
    faStreetView,
    faStrikethrough,
    faStroopwafel,
    faSubscript,
    faSubway,
    faSuitcase,
    faSuitcaseRolling,
    faSun,
    faSuperscript,
    faSurprise,
    faSwatchbook,
    faSwimmer,
    faSwimmingPool,
    faSynagogue,
    faSync,
    faSyncAlt,
    faSyringe,
    faTable,
    faTableTennis,
    faTablet,
    faTabletAlt,
    faTablets,
    faTachometerAlt,
    faTag,
    faTags,
    faTape,
    faTasks,
    faTaxi,
    faTeeth,
    faTeethOpen,
    faTemperatureHigh,
    faTemperatureLow,
    faTenge,
    faTerminal,
    faTextHeight,
    faTextWidth,
    faTh,
    faThLarge,
    faThList,
    faTheaterMasks,
    faThermometer,
    faThermometerEmpty,
    faThermometerFull,
    faThermometerHalf,
    faThermometerQuarter,
    faThermometerThreeQuarters,
    faThumbsDown,
    faThumbsUp,
    faThumbtack,
    faTicketAlt,
    faTimes,
    faTimesCircle,
    faTint,
    faTintSlash,
    faTired,
    faToggleOff,
    faToggleOn,
    faToilet,
    faToiletPaper,
    faToiletPaperSlash,
    faToolbox,
    faTools,
    faTooth,
    faTorah,
    faToriiGate,
    faTractor,
    faTrademark,
    faTrafficLight,
    faTrailer,
    faTrain,
    faTram,
    faTransgender,
    faTransgenderAlt,
    faTrash,
    faTrashAlt,
    faTrashRestore,
    faTrashRestoreAlt,
    faTree,
    faTrophy,
    faTruck,
    faTruckLoading,
    faTruckMonster,
    faTruckMoving,
    faTruckPickup,
    faTshirt,
    faTty,
    faTv,
    faUmbrella,
    faUmbrellaBeach,
    faUnderline,
    faUndo,
    faUndoAlt,
    faUniversalAccess,
    faUniversity,
    faUnlink,
    faUnlock,
    faUnlockAlt,
    faUpload,
    faUser,
    faUserAlt,
    faUserAltSlash,
    faUserAstronaut,
    faUserCheck,
    faUserCircle,
    faUserClock,
    faUserCog,
    faUserEdit,
    faUserFriends,
    faUserGraduate,
    faUserInjured,
    faUserLock,
    faUserMd,
    faUserMinus,
    faUserNinja,
    faUserNurse,
    faUserPlus,
    faUserSecret,
    faUserShield,
    faUserSlash,
    faUserTag,
    faUserTie,
    faUserTimes,
    faUsers,
    faUsersCog,
    faUtensilSpoon,
    faUtensils,
    faVectorSquare,
    faVenus,
    faVenusDouble,
    faVenusMars,
    faVial,
    faVials,
    faVideo,
    faVideoSlash,
    faVihara,
    faVirus,
    faVirusSlash,
    faViruses,
    faVoicemail,
    faVolleyballBall,
    faVolumeDown,
    faVolumeMute,
    faVolumeOff,
    faVolumeUp,
    faVoteYea,
    faVrCardboard,
    faWalking,
    faWallet,
    faWarehouse,
    faWater,
    faWaveSquare,
    faWeight,
    faWeightHanging,
    faWheelchair,
    faWifi,
    faWind,
    faWindowClose,
    faWindowMaximize,
    faWindowMinimize,
    faWindowRestore,
    faWineBottle,
    faWineGlass,
    faWineGlassAlt,
    faWonSign,
    faWrench,
    faXRay,
    faYenSign
];
library.add(FontLibary)

let IconLibary = [
    { font: faUtensils, type: "meal" },
    { font: faTaxi, type: "traffic" },
    { font: faServer, type: "device" },
    { font: faBriefcaseMedical, type: "medical" },
    { font: faWrench, type: "repair" },
    { font: faPrint, type: "print" },
    { font: faMoneyBillAlt, type: "purchase" },
    { font: faTruckLoading, type: "rent" },
]

export { FontAwesomeIcon, FontLibary, IconLibary }